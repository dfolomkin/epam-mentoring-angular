import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlBarComponent } from './control-bar.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { SearchBarModule } from 'src/app/components/search-bar/search-bar.module';

@NgModule({
  declarations: [ControlBarComponent],
  imports: [CommonModule, AppRoutingModule, SearchBarModule],
  exports: [ControlBarComponent],
  bootstrap: [ControlBarComponent]
})
export class ControlBarModule {}
