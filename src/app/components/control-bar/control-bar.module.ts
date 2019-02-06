import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlBarComponent } from './control-bar.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { FilterBarModule } from 'src/app/components/filter-bar/filter-bar.module';

@NgModule({
  declarations: [ControlBarComponent],
  imports: [CommonModule, AppRoutingModule, FilterBarModule],
  exports: [ControlBarComponent],
  bootstrap: [ControlBarComponent]
})
export class ControlBarModule {}
