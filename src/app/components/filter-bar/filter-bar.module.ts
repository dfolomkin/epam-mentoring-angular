import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterBarComponent } from './filter-bar.component';

@NgModule({
  declarations: [FilterBarComponent],
  imports: [CommonModule, FormsModule],
  exports: [FilterBarComponent],
  bootstrap: [FilterBarComponent]
})
export class FilterBarModule {}
