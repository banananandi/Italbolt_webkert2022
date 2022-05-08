import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ital } from 'src/app/shared/models/ital';
import { WebshopService } from 'src/app/shared/services/webshop.service';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.scss']
})
export class WebshopComponent implements OnInit, OnDestroy {

  ItalObject?:Array<Ital>;

  ItalContent:Array<Ital> = <any>{};

  loadedImage: string[]= [];
  loading: boolean = true;
  loadingSubscription?: Subscription;
  



  constructor(private webshopService: WebshopService) { }

  ngOnInit(): void {
    this.webshopService.getAll().subscribe((data: Array<Ital>) =>{
      this.ItalObject=data;
      this.ItalContent = data;

      this.afterGetAll();
    });

  }
  
  afterGetAll(){
       for(let i=0; i<this.ItalContent.length; i++){
        this.loadingSubscription=this.webshopService.loadImage(this.ItalContent[i].img).subscribe(data =>{
          this.loadedImage[i]=data;
          this.loading=false;
          
      });
    }
  }

  ngOnDestroy(){
    this.loadingSubscription?.unsubscribe;
    
  }

}


