import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterBarComponent } from './filter-bar.component';

import { FilterService } from 'src/app/commons/services/filter.service';

@NgModule({
  declarations: [FilterBarComponent],
  imports: [CommonModule, FormsModule],
  exports: [FilterBarComponent],
  bootstrap: [FilterBarComponent],
  providers: [FilterService]
})
export class FilterBarModule {}
