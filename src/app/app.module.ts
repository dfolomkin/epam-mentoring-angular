import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { FooterModule } from './components/footer/footer.module';
import { CoursesModule } from './containers/courses/courses.module';
import { CourseEditModule } from './containers/course-edit/course-edit.module';
import { AuthModule } from './containers/auth/auth.module';
import { NotFoundModule } from './containers/not-found/not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BreadcrumbsModule,
    FooterModule,
    CoursesModule,
    CourseEditModule,
    AuthModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
