import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar.component';

import { StoreService } from 'src/app/commons/services/store.service';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchBarComponent],
  bootstrap: [SearchBarComponent],
  providers: [StoreService]
})
export class SearchBarModule {}
