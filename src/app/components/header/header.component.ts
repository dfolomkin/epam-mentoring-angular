import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/commons/services/auth.service';
import { ROUTES_MAP } from 'src/app/commons/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogoutClick() {
    this.authService.logout();
    console.log('Logout has been done.');
    this.router.navigateByUrl('/' + ROUTES_MAP.auth);
  }
}
