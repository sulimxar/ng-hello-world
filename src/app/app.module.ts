import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from "./like.component";
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LikeComponent,
    CourseComponent,
    FavoriteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
