import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from './app.state';
import { GetCurrentAuthPair } from 'src/app/components/auth/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {
    this.store$.dispatch(new GetCurrentAuthPair());
  }
}
