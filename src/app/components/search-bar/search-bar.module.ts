import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar.component';

import { SearchService } from 'src/app/commons/services/search.service';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchBarComponent],
  bootstrap: [SearchBarComponent],
  providers: [SearchService]
})
export class SearchBarModule {}
