import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './containers/courses/courses.component';
import { CourseEditComponent } from './containers/course-edit/course-edit.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'course-edit', component: CourseEditComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [CoursesComponent, CourseEditComponent];
