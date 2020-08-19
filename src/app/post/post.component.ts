import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postContent:string='';
  constructor(private _posts:BlogService) { }

  ngOnInit() {
  }

  post(){
    console.log(this.postContent);    
    this._posts.blogPost({date:new Date() ,user:'Jayesh',post:this.postContent}).subscribe(
      succ=>{
        location.reload();
      },
      err=>{
        alert(err);
      }
    )
  }
}
