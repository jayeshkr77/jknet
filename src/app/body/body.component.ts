import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  loggedIn:boolean = false;
  userHash:string;
  constructor() { }

  ngOnInit() {
    this.userHash = sessionStorage.getItem('user');
    if(this.userHash == 'hjrasjfn#hv43eh5riesf8'){
      this.loggedIn = true;
    }
  }

}
