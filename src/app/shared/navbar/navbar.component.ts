import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() currentPage: string = '';
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {


  }
  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }

  close(logrequest?: boolean){
    this.onCloseSidenav.emit(true);
    if (logrequest === true) {
      this.onLogout.emit(logrequest);
    }
  }




}
