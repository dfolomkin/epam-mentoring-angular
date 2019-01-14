import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseCardComponent } from './course-card.component';

import { ICourse } from '../../commons/constants';

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
      declarations: [CourseCardComponent, DurationPipeMock, DatePipeMock]
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
      date: new Date('2018-09-06')
    };

    component.course = courseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('render', () => {
    let compiled: HTMLElement;

    beforeEach(() => {
      compiled = fixture.nativeElement;
    });

    it('should render h3 with this.course.title', () => {
      expect(compiled.querySelector('h3').textContent).toContain(
        courseMock.title
      );
    });

    it('should render div.course-card__description with this.course.description', () => {
      expect(
        compiled.querySelector('.course-card__description').textContent
      ).toContain(courseMock.description);
    });

    it('should render div.course-card__datetime-info with this.course.duration', () => {
      expect(
        compiled
          .querySelector('.course-card__datetime-info')
          .querySelectorAll('span')[0].textContent
      ).toContain(courseMock.duration.toString());
    });

    it('should render div.course-card__datetime-info with this.course.date', () => {
      expect(
        compiled
          .querySelector('.course-card__datetime-info')
          .querySelectorAll('span')[1].textContent
      ).toContain(courseMock.date.toString());
    });
  });

  describe('events', () => {
    let compiled: DebugElement;

    beforeEach(() => {
      compiled = fixture.debugElement;
    });

    it('should fire this.clickEvent after click on button.btn', () => {
      const emitSpy: jasmine.Spy = spyOn(component.clickEvent, 'emit');
      const deleteButton: DebugElement = compiled.query(By.css('.js-delete'));

      deleteButton.triggerEventHandler('click', null);

      expect(emitSpy).toHaveBeenCalledWith(1);
    });
  });
});
