import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, IAuthPair } from 'src/app/commons/services/auth.service';
import { ROUTES_MAP } from 'src/app/commons/constants';

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
    this.router.navigateByUrl('/' + ROUTES_MAP.courses);
  }
}
