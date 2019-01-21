import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs.component';

import { AppRoutingModule } from '../../app-routing.module';
import { AuthService } from '../../commons/services/auth.service';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [BreadcrumbsComponent],
  bootstrap: [BreadcrumbsComponent],
  providers: [AuthService]
})
export class BreadcrumbsModule {}
