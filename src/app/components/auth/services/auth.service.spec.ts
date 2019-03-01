import { AuthService, IAuthPair } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const authPairMock: IAuthPair = { login: 'user', password: 'pass' };

  beforeEach(() => {
    service = new AuthService();
  });

  it('should have a method to check whether the user logged in or not', () => {
    expect(service.isAuthed).toBeDefined();
  });

  it('by default user should not be logged in', () => {
    expect(service.isAuthed()).toEqual(false);
  });

  it('should be able to log the user in with good credentials', () => {
    service.login(authPairMock);
    expect(service.isAuthed()).toEqual(true);
  });

  xit('should do something with bad credentials', () => {
    expect(service.login({ login: 'user', password: '' })).toThrow();
  });

  it('should be able to log the user out', () => {
    service.login(authPairMock);
    expect(service.isAuthed()).toEqual(true);
    service.logout();
    expect(service.isAuthed()).toEqual(false);
  });

  it('should be able to return correct user name', () => {
    service.login(authPairMock);
    expect(service.getUserInfo()).toBe('user');
    service.logout();
    expect(service.getUserInfo()).toBe(undefined);
  });
});
