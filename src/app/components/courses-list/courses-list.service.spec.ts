import { CoursesListService } from './courses-list.service';

describe('CoursesListService', () => {
  let service: CoursesListService;

  beforeEach(() => {
    service = new CoursesListService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCourses()', () => {
    it('should return array', () => {
      expect(Array.isArray(service.getCourses())).toBe(true);
    });
  });
});
