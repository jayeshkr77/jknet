import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn:boolean = false;
  userHash:string;
  constructor() { }

  ngOnInit() {
    this.userHash = sessionStorage.getItem('user');
    if(this.userHash == 'hjrasjfn#hv43eh5riesf8'){
      this.loggedIn = true;
    }
  }

  logOut(){
    sessionStorage.clear();
    location.reload();
  }
}
