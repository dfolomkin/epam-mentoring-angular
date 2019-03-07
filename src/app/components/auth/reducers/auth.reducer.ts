import { initialAppState } from 'src/app/app.state';
import { IAuthPair } from '../interfaces/auth.interface';
import { AuthActionUnion, AuthActionTypes } from '../actions/auth.action';

export const authReducer = (
  state = initialAppState.authPair,
  action: AuthActionUnion
): IAuthPair => {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return { login: action.payload.login, password: action.payload.password };
    }

    case AuthActionTypes.Logout: {
      return {} as IAuthPair;
    }

    default:
      return state;
  }
};
