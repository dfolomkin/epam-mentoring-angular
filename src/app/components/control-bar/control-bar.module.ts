import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlBarComponent } from './control-bar.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { FilterBarModule } from 'src/app/components/filter-bar/filter-bar.module';
import { SearchBarModule } from 'src/app/components/search-bar/search-bar.module';
import { DataCountSwitchModule } from 'src/app/components/data-count-switch/data-count-switch.module';

@NgModule({
  declarations: [ControlBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FilterBarModule,
    SearchBarModule,
    DataCountSwitchModule
  ],
  exports: [ControlBarComponent],
  bootstrap: [ControlBarComponent]
})
export class ControlBarModule {}
