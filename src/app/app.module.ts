import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderModule } from './components/loader/loader.module';

import { HeaderModule } from './components/header/header.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { FooterModule } from './components/footer/footer.module';
import { CoursesModule } from './containers/courses/courses.module';
import { CourseEditModule } from './containers/course-edit/course-edit.module';
import { AuthContainerModule } from './containers/auth-container/auth-container.module';
import { NotFoundModule } from './containers/not-found/not-found.module';

import { AuthInterceptor } from './components/auth/auth.interceptor';

import { authReducer } from './components/auth/reducers/auth.reducer';
import { AuthEffects } from './components/auth/effects/auth.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ authPair: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    LoaderModule,
    HeaderModule,
    BreadcrumbsModule,
    FooterModule,
    CoursesModule,
    CourseEditModule,
    AuthContainerModule,
    NotFoundModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
