import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BodyComponent } from './body/body.component';
import { PostComponent } from './post/post.component';

import {NoSanitizePipe} from './sanatizeHtml.pipe';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    BlogSectionComponent,
    BodyComponent,
    PostComponent,
    NoSanitizePipe,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EditorModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
