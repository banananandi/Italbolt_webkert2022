import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Ital } from '../models/ital';

@Injectable({
  providedIn: 'root'
})
export class WebshopService {

  collectionName = 'Italok'

  constructor(private http: HttpClient, private afs: AngularFirestore, private storage:AngularFireStorage  ) { }

  loadImageMeta(metaUrl: string): Observable<Array<Ital>>{
    return this.afs.collection<Ital>(this.collectionName).valueChanges();
  }

  loadImage(imageUrl: string){
    return this.storage.ref(imageUrl).getDownloadURL(); 
  }

  getAll(){
    return this.afs.collection<Ital>(this.collectionName).valueChanges();
    
  }
}
