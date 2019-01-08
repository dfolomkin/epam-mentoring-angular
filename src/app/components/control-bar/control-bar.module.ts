import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlBarComponent } from './control-bar.component';

import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
  declarations: [ControlBarComponent],
  imports: [CommonModule, SearchBarModule],
  exports: [ControlBarComponent],
  bootstrap: [ControlBarComponent]
})
export class ControlBarModule {}
