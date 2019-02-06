import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataCountSwitchComponent } from './data-count-switch.component';

import { StoreService } from 'src/app/commons/services/store.service';

@NgModule({
  declarations: [DataCountSwitchComponent],
  imports: [CommonModule, FormsModule],
  exports: [DataCountSwitchComponent],
  bootstrap: [DataCountSwitchComponent],
  providers: [StoreService]
})
export class DataCountSwitchModule {}
