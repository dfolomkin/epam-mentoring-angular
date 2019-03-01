import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthFormComponent } from './components/auth-form.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [AuthFormComponent],
  bootstrap: [AuthFormComponent],
  providers: [AuthService]
})
export class AuthModule {}
