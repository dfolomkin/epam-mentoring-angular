import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';

import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [BreadcrumbsComponent],
  bootstrap: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {}
