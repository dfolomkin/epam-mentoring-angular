import { DebugElement, Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { includes } from 'lodash';

import { CourseCardComponent } from './course-card.component';

import { CourseCardBorderDirective } from './directives/course-card-border.directive';
import { ICourse } from 'src/app/commons/interfaces/course.interface';

describe('CourseCardComponent-Stand-Alone', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  let courseMock: ICourse;

  @Pipe({ name: 'duration' })
  class DurationPipeMock implements PipeTransform {
    transform(input: number) {
      return input.toString();
    }
  }

  @Pipe({ name: 'date' })
  class DatePipeMock implements PipeTransform {
    transform(input: number) {
      return input.toString();
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseCardComponent,
        DurationPipeMock,
        DatePipeMock,
        CourseCardBorderDirective
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

    courseMock = {
      id: 1,
      title: 'TestTitle',
      description: 'Test Description',
      duration: 90,
      date: new Date('2018-09-06'),
      rating: 5
    };
    component.course = courseMock;

    fixture.detectChanges();
  });

  it('should exists', () => {
    expect(component).toBeTruthy();
  });

  describe('render', () => {
    let compiled: HTMLElement;

    beforeEach(() => {
      compiled = fixture.nativeElement;
    });

    it('should render title', () => {
      expect(compiled.querySelector('h3').textContent).toContain(
        courseMock.title.toUpperCase()
      );
    });

    it('should render description', () => {
      expect(
        compiled.querySelector('.course-card__description').textContent
      ).toContain(courseMock.description);
    });

    it('should render duration', () => {
      expect(
        compiled
          .querySelector('.course-card__datetime-info')
          .querySelectorAll('span')[0].textContent
      ).toContain(courseMock.duration.toString());
    });

    it('should render date', () => {
      expect(
        compiled
          .querySelector('.course-card__datetime-info')
          .querySelectorAll('span')[1].textContent
      ).toContain(courseMock.date.toString());
    });

    it('should render top-rated icon if rating = 5', () => {
      component.course.rating = 5;
      fixture.detectChanges();

      expect(
        compiled.querySelector('h3').querySelector('.course-card__rating-icon')
      ).toBeTruthy();
    });

    // move to test-host
    xit('should not render top-rated icon if rating < 5', () => {
      component.course.rating = 4;
      fixture.detectChanges();

      expect(
        compiled.querySelector('h3').querySelector('.course-card__rating-icon')
      ).toBeFalsy();
    });

    it('should add special class with backgroung style if rating = 5', () => {
      component.course.rating = 5;
      fixture.detectChanges();

      expect(
        includes(
          compiled.querySelector('div').classList,
          'course-card__top-rated-bg'
        )
      ).toBe(true);
    });

    // move to test-host
    xit('should not add special class with backgroung style if rating < 5', () => {
      component.course.rating = 4;
      fixture.detectChanges();

      expect(
        includes(
          compiled.querySelector('div').classList,
          'course-card__top-rated-bg'
        )
      ).toBe(false);
    });
  });

  describe('events', () => {
    let compiled: DebugElement;

    beforeEach(() => {
      compiled = fixture.debugElement;
    });

    it('should fire event after click on button', () => {
      const emitSpy: jasmine.Spy = spyOn(component.clickEvent, 'emit');
      const deleteButton: DebugElement = compiled.query(By.css('.js-delete'));

      deleteButton.triggerEventHandler('click', null);

      expect(emitSpy).toHaveBeenCalledWith(1);
    });
  });
});
