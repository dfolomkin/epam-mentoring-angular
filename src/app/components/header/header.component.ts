import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService, IAuthPair } from 'src/app/commons/services/auth.service';
import { ROUTES_MAP } from 'src/app/commons/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authPair: IAuthPair;
  isAuthed: boolean;
  getUserInfoSubscription: Subscription;
  isAuthedSubscription: Subscription;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUserInfo().subscribe((pair: IAuthPair) => {
      this.authPair = pair;
    });
    this.authService.isAuthed().subscribe((res: boolean) => {
      this.isAuthed = res;
    });
  }
  ngOnDestroy() {
    this.getUserInfoSubscription.unsubscribe();
    this.isAuthedSubscription.unsubscribe();
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigateByUrl('/' + ROUTES_MAP.auth);
  }
}
