import { TestBed } from '@angular/core/testing';

import { CoursesListService } from './courses-list.service';

import { ICourse } from '../../commons/constants';

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
