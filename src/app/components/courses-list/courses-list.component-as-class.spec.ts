import { CoursesListComponent } from './courses-list.component';

import { CoursesListService } from './courses-list.service';
import { ICourse } from '../../commons/constants';
import { SearchService } from '../../commons/services/search.service';

describe('CoursesListComponent-As-Class', () => {
  let component: CoursesListComponent;

  let coursesMock;
  const coursesServiceMock: Partial<CoursesListService> = {
    getCourses: () => coursesMock
  };
  let searchService: SearchService;

  beforeEach(() => {
    coursesMock = [{ id: 1 }, { id: 2 }, { id: 3 }] as ICourse[];
    searchService = new SearchService();
    component = new CoursesListComponent(
      coursesServiceMock as CoursesListService,
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
