import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { getAuthLogin } from 'src/app/components/auth/selectors/auth.selector';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.less']
})
export class ControlBarComponent implements OnInit {
  login$: Observable<string>;

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {
    this.login$ = this.store$.pipe(select(getAuthLogin));
  }
}
