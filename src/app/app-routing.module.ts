import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './containers/courses/courses.component';
import { CourseEditComponent } from './containers/course-edit/course-edit.component';
import { AuthComponent } from './containers/auth/auth.component';
import { routesMap } from './commons/constants';

const routes: Routes = [
  { path: routesMap.courses, component: CoursesComponent },
  { path: routesMap.courseEdit, component: CourseEditComponent },
  { path: `${routesMap.courseEdit}/:id`, component: CourseEditComponent },
  { path: routesMap.auth, component: AuthComponent },
  { path: '', redirectTo: `/${routesMap.courses}`, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
