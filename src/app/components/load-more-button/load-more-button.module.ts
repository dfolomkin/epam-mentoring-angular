import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadMoreButtonComponent } from './load-more-button.component';

import { StoreService } from 'src/app/commons/services/store.service';

@NgModule({
  declarations: [LoadMoreButtonComponent],
  imports: [CommonModule],
  exports: [LoadMoreButtonComponent],
  bootstrap: [LoadMoreButtonComponent],
  providers: [StoreService]
})
export class LoadMoreButtonModule {}
