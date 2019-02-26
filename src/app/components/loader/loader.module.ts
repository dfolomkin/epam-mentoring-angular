import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader.component';

import { LoaderService } from 'src/app/commons/services/loader.service';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule],
  exports: [LoaderComponent],
  bootstrap: [LoaderComponent],
  providers: [LoaderService]
})
export class LoaderModule {}
