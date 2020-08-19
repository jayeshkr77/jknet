import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userName:string=null;
  password:string=null;
  constructor() { }

  ngOnInit() {
  }

  login(){
    if(this.userName == 'jayesh@jayesh.com' && this.password == 'jayesh@jayesh.com'){
      sessionStorage.setItem('user','hjrasjfn#hv43eh5riesf8');
      location.reload();
    }
  }
}
