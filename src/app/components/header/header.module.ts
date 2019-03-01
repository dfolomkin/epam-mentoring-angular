import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { LogoModule } from 'src/app/components/logo/logo.module';
import { AuthService } from 'src/app/components/auth/services/auth.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule, AppRoutingModule],
  exports: [HeaderComponent],
  bootstrap: [HeaderComponent],
  providers: [AuthService]
})
export class HeaderModule {}
