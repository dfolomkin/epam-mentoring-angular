import { CoursesService, getNewId } from './courses.service';

import { ICourse } from 'src/app/components/courses/interfaces/courses.interface';

describe('CoursesService', () => {
  let service: CoursesService;
  const coursesMock: ICourse[] = [
    { id: 1, title: 'Course1' },
    { id: 2, title: 'Course2' },
    { id: 3, title: 'Course3' }
  ] as ICourse[];

  beforeEach(() => {
    service = new CoursesService();
    service.courses = [...coursesMock]; // spread for copy instead of link
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getCourses()', () => {
    it('should return array of courses', () => {
      expect(service.getCourses()).toEqual(coursesMock);
    });
  });

  describe('#getCourseById()', () => {
    it('should return pointed course if it exists', () => {
      expect(service.getCourseById(1)).toEqual(coursesMock[0]);
    });

    it('should return empty object if course doest exist', () => {
      expect(service.getCourseById(4)).toEqual({});
    });
  });

  describe('#createCourse()', () => {
    it('should add new course to the source', () => {
      const newCourse = { title: 'NewCourse4' } as ICourse;

      expect(service.getCourses().length).toBe(3);

      service.createCourse(newCourse);

      expect(service.getCourses().length).toBe(4);
      expect(service.getCourseById(4)).toEqual({ id: 4, ...newCourse });
    });
  });

  describe('#updateCourse()', () => {
    it('should update pointed course in the source', () => {
      const newCourseData = { title: 'NewCourse3' } as ICourse;

      expect(service.getCourseById(3)).toEqual(coursesMock[2]);

      service.updateCourse(3, newCourseData);

      expect(service.getCourseById(3)).toEqual({
        id: 3,
        ...coursesMock[2],
        ...newCourseData
      });
    });
  });

  describe('#deleteCourse()', () => {
    it('should delete pointed course in the source', () => {
      expect(service.getCourses().length).toBe(3);

      service.deleteCourse(3);

      expect(service.getCourses().length).toBe(2);
      expect(service.getCourseById(3)).toEqual({});
    });
  });

  describe('getNewId()', () => {
    it('should generate newId = maxId + 1', () => {
      expect(getNewId(service.getCourses())).toBe(4);
    });

    it('should generate newId = 1 if the source is empty', () => {
      service.courses = [] as ICourse[];

      expect(getNewId(service.getCourses())).toBe(1);
    });
  });
});
