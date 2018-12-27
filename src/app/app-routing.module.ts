import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './containers/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [CoursesComponent, FooterComponent];
