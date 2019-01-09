import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent : As Class', () => {
  let component: CourseCardComponent;

  beforeEach(() => {
    component = new CourseCardComponent();
  });

  it('should exists', () => {
    expect(component).toBeTruthy();
  });

  describe('onDeleteClick()', () => {
    it('should fire this.clickEvent', () => {
      const emitSpy: jasmine.Spy = spyOn(component.clickEvent, 'emit');
      component.course = {
        id: 1
      };
      component.onDeleteClick();

      expect(emitSpy).toHaveBeenCalledWith(1);
    });
  });
});
