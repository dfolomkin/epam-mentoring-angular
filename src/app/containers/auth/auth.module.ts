import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';

import { AuthService } from 'src/app/commons/services/auth.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, FormsModule],
  bootstrap: [AuthComponent],
  providers: [AuthService]
})
export class AuthModule {}
