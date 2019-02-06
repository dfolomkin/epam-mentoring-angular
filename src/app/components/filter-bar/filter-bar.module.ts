import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterBarComponent } from './filter-bar.component';

import { StoreService } from 'src/app/commons/services/store.service';

@NgModule({
  declarations: [FilterBarComponent],
  imports: [CommonModule, FormsModule],
  exports: [FilterBarComponent],
  bootstrap: [FilterBarComponent],
  providers: [StoreService]
})
export class FilterBarModule {}
