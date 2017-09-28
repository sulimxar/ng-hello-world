import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from "./like.component";
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MytitlePipe } from './mytitle.pipe';
import { HeartComponent } from './heart/heart.component';
import { ZippyComponent } from './zippy/zippy.component';
import { TitleDirective } from './title.directive';
import { CourseAdminComponent } from './course-admin/course-admin.component';
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PasswordFormComponent } from './password-form/password-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    SignupFormComponent,
    LikeComponent,
    CourseComponent,
    FavoriteComponent,
    MytitlePipe,
    HeartComponent,
    ZippyComponent,
    TitleDirective,
    CourseAdminComponent,
    PasswordFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
