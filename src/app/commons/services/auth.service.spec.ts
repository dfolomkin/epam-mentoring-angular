import { AuthService, IAuthPair } from './auth.service';

fdescribe('AuthService', () => {
  let service: AuthService;
  const authPairMock: IAuthPair = { login: 'user', password: 'pass' };

  beforeEach(() => {
    service = new AuthService();
    service.authPair = undefined;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#login()', () => {
    it('should update auth pair', () => {
      service.login(authPairMock);

      expect(service.authPair).toEqual(authPairMock);
    });
  });

  describe('#logout()', () => {
    it('should reset auth pair', () => {
      service.authPair = { ...authPairMock };
      service.logout();

      expect(service.authPair).toBe(undefined);
    });
  });

  describe('#getUserInfo()', () => {
    it('should return undefined if login hasnt been done', () => {
      expect(service.getUserInfo()).toBe(undefined);
    });

    it('should return user login if login has been done', () => {
      service.login(authPairMock);

      expect(service.getUserInfo()).toBe('user');
    });
  });

  describe('#isAuthed()', () => {
    it('should return false if login hasnt been done', () => {
      expect(service.isAuthed()).toBe(false);
    });

    it('should return true if login has been done', () => {
      service.login(authPairMock);

      expect(service.isAuthed()).toBe(true);
    });
  });
});
