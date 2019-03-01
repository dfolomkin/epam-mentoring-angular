import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthContainerComponent } from './auth-container.component';

import { AuthModule } from 'src/app/components/auth/auth.module';

@NgModule({
  declarations: [AuthContainerComponent],
  imports: [CommonModule, AuthModule],
  exports: [AuthContainerComponent],
  bootstrap: [AuthContainerComponent]
})
export class AuthContainerModule {}
