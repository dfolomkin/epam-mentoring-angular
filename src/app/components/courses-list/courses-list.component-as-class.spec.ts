import { CoursesListComponent } from './courses-list.component';

import { CoursesListService } from './courses-list.service';
import { ICourse } from '../../commons/constants';

describe('CoursesListComponent : As Class', () => {
  let component: CoursesListComponent;

  let coursesMock;
  const serviceMock: Partial<CoursesListService> = {
    getCourses: () => coursesMock
  };

  beforeEach(() => {
    coursesMock = [{ id: 1 }, { id: 2 }, { id: 3 }] as ICourse[];
    component = new CoursesListComponent(serviceMock as CoursesListService);
  });

  it('should exists', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should fill this.courses', () => {
      component.ngOnInit();

      expect(component.courses).toEqual(coursesMock);
    });
  });

  describe('handleChildDelete(id)', () => {
    it('should delete pointed course', () => {
      component.ngOnInit();
      component.handleChildDelete(3);

      expect(component.courses).toEqual([{ id: 1 }, { id: 2 }] as ICourse[]);
    });
  });
});
