import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesListComponent } from './courses-list.component';

import { CourseCardModule } from '../course-card/course-card.module';
import { CoursesListService } from './courses-list.service';
import { ICourse } from '../../commons/constants';
import { DebugElement } from '@angular/core';

describe('CoursesListComponent : Stand-Alone', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  const coursesMock = [{ id: 1 }, { id: 2 }, { id: 3 }] as ICourse[];
  const serviceMock: Partial<CoursesListService> = {
    getCourses: () => coursesMock
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent],
      imports: [CourseCardModule]
    })
      .overrideComponent(CoursesListComponent, {
        set: {
          providers: [{ provide: CoursesListService, useValue: serviceMock }]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill this.courses after render', () => {
    expect(component.courses).toEqual(coursesMock);
  });

  describe('render', () => {
    let compiled: HTMLElement;

    beforeEach(() => {
      compiled = fixture.nativeElement;
    });

    it('should render right quantity of course-cards', () => {
      expect(compiled.querySelectorAll('app-course-card').length).toBe(
        coursesMock.length
      );
    });
  });

  describe('events', () => {
    let compiled: DebugElement;

    beforeEach(() => {
      compiled = fixture.debugElement;
    });

    // is it right to invade in child element ?
    it('should delete pointed course after click delete button', () => {
      const deleteButtons: DebugElement[] = compiled.queryAll(
        By.css('.js-delete')
      );

      deleteButtons[2].triggerEventHandler('click', null);

      expect(component.courses).toEqual([{ id: 1 }, { id: 2 }] as ICourse[]);
    });
  });
});
