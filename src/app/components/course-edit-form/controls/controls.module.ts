import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TitleControlComponent } from './title-control/title-control.component';
import { DescriptionControlComponent } from './description-control/description-control.component';
import { DateControlComponent } from './date-control/date-control.component';
import { DurationControlComponent } from './duration-control/duration-control.component';
import { IsNumberValidatorDirective } from './duration-control/validators/is-number.directive';
import { CustomPipesModule } from 'src/app/commons/pipes/custom-pipes.module';

@NgModule({
  declarations: [
    TitleControlComponent,
    DescriptionControlComponent,
    DateControlComponent,
    DurationControlComponent,
    IsNumberValidatorDirective
  ],
  imports: [CommonModule, ReactiveFormsModule, CustomPipesModule],
  exports: [
    TitleControlComponent,
    DescriptionControlComponent,
    DateControlComponent,
    DurationControlComponent
  ]
})
export class ControlsModule {}
