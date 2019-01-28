import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES_MAP } from './commons/constants';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseEditComponent } from './containers/course-edit/course-edit.component';
import { AuthComponent } from './containers/auth/auth.component';

const routes: Routes = [
  { path: ROUTES_MAP.courses, component: CoursesComponent },
  { path: ROUTES_MAP.courseEdit, component: CourseEditComponent },
  { path: `${ROUTES_MAP.courseEdit}/:id`, component: CourseEditComponent },
  { path: ROUTES_MAP.auth, component: AuthComponent },
  { path: '', redirectTo: `/${ROUTES_MAP.courses}`, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
