import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  blogPost(postObj:any):Observable<boolean>{
    return this.http.post<boolean>('https://vtuise.herokuapp.com/blog/post',postObj);
  }

  getPost(){
    return this.http.get('https://vtuise.herokuapp.com/blog/posts');
  }
}
