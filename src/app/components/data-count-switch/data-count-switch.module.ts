import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataCountSwitchComponent } from './data-count-switch.component';

@NgModule({
  declarations: [DataCountSwitchComponent],
  imports: [CommonModule, FormsModule],
  exports: [DataCountSwitchComponent],
  bootstrap: [DataCountSwitchComponent]
})
export class DataCountSwitchModule {}
