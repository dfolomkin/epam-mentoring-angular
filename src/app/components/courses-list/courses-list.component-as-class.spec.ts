import { CoursesListComponent } from './courses-list.component';

import { CoursesService } from '../../commons/services/courses.service';
import { SearchService } from '../../commons/services/search.service';
import { ICourse } from '../../commons/interfaces/course.interface';

describe('CoursesListComponent-As-Class', () => {
  let component: CoursesListComponent;

  let coursesMock;
  const coursesServiceMock: Partial<CoursesService> = {
    getCourses: () => coursesMock
  };
  let searchService: SearchService;

  beforeEach(() => {
    coursesMock = [{ id: 1 }, { id: 2 }, { id: 3 }] as ICourse[];
    searchService = new SearchService();
    component = new CoursesListComponent(
      coursesServiceMock as CoursesService,
      searchService
    );
  });

  it('should exists', () => {
    expect(component).toBeTruthy();
  });

  it('should set this.searchQuery to empty string', () => {
    expect(component.searchQuery).toBe('');
  });

  it('should set this.searchQuery to searchQuery', () => {
    const searchQueryMock = 'test';

    searchService.setSearchQuery(searchQueryMock);

    expect(component.searchQuery).toBe(searchQueryMock);
  });

  describe('ngOnInit()', () => {
    it('should fill this.courses', () => {
      component.ngOnInit();

      expect(component.courses).toEqual(coursesMock);
    });
  });

  describe('onChildDelete(id)', () => {
    it('should delete pointed course', () => {
      component.ngOnInit();
      component.onChildDelete(3);

      expect(component.courses).toEqual([{ id: 1 }, { id: 2 }] as ICourse[]);
    });
  });
});
