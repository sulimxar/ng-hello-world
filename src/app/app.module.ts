import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from "./like.component";
import { CourseComponent } from './course/course.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    LikeComponent,
    CourseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
