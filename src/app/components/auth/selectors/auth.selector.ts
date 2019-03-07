import { createSelector } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { IAuthPair } from '../interfaces/auth.interface';

const selectAuthPair = (state: IAppState) => state.authPair;

export const getAuthLogin = createSelector(
  selectAuthPair,
  (authPairState: IAuthPair) => authPairState.login
);
