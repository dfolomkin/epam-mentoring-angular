import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './components/button/button.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';
import { CoursesComponent } from './containers/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    ControlBarComponent,
    LogoComponent,
    CourseCardComponent,
    ButtonComponent,
    SearchComponent,
    CoursesListComponent,
    CoursesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
