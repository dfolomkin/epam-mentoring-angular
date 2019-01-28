import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, IAuthPair } from '../../commons/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  authPair: IAuthPair;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authPair = { login: '', password: '' };
  }

  onLoginClick() {
    this.authService.login(this.authPair);
    this.router.navigate(['/']);
    console.log('Login has been done.');
  }
}
