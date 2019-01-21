import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import { LogoModule } from '../logo/logo.module';
import { AuthService } from '../../commons/services/auth.service';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule, AppRoutingModule],
  exports: [HeaderComponent],
  bootstrap: [HeaderComponent],
  providers: [AuthService]
})
export class HeaderModule {}
