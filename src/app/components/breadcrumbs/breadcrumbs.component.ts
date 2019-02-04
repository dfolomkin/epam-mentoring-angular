import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Router,
  RouterEvent,
  NavigationEnd,
  ActivatedRoute
} from '@angular/router';
import { tail, capitalize } from 'lodash';

import { AuthService } from 'src/app/commons/services/auth.service';
import { ROUTES_MAP } from 'src/app/commons/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  routerEventsSubscription: Subscription;
  routeChunks: string[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routerEventsSubscription = this.router.events.subscribe(
      (event: RouterEvent) => {
        if (event instanceof NavigationEnd) {
          this.routeChunks = tail(this.router.url.split('/'));

          if (
            this.routeChunks[0] === ROUTES_MAP.courses &&
            this.routeChunks[1]
          ) {
            if (this.routeChunks[1] === ROUTES_MAP.addNew) {
              this.routeChunks[1] = 'new video course';
            } else if (!isNaN(+this.routeChunks[1])) {
              this.routeChunks[1] = `video course ${this.routeChunks[1]}`;
            }
          }

          this.routeChunks = this.routeChunks.map(item => capitalize(item));
        }
      }
    );
  }

  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
  }
}
