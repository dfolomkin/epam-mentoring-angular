import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './duration.pipe';
import { OrderByDatePipe } from './order-by-date.pipe';

@NgModule({
  declarations: [DurationPipe, OrderByDatePipe],
  imports: [CommonModule],
  exports: [DurationPipe, OrderByDatePipe]
})
export class CustomPipesModule {}
