import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit {
  posts:any;
  loader:Boolean = true;

  constructor(private blogPost:BlogService, private router:Router) { }

  ngOnInit() {
    this.blogPost.getPost().subscribe(
      succ=>{
        this.posts = succ;
        this.router.navigate(['']);
        this.loader = false
      },
      err=>{
        alert(err);
      }
    );
  }

}
