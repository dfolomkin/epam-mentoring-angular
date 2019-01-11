import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseCardComponent } from './course-card.component';

import { CourseCardModule } from './course-card.module';
import { CoursesListService } from '../courses-list/courses-list.service';
import { ICourse } from '../../commons/constants';

describe('CourseCardComponent : Test Host', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  const coursesMock = [{ id: 1 }, { id: 2 }, { id: 3 }] as ICourse[];

  class CoursesServiceMock implements Partial<CoursesListService> {
    getCourses() {
      return coursesMock;
    }
  }

  @Component({
    template: `
      <app-course-card
        *ngFor="let course of courses"
        [course]="course"
        (clickEvent)="onChildDelete($event)"
      >
      </app-course-card>
    `
  })
  class TestHostComponent implements OnInit {
    courses: ICourse[];

    constructor(private coursesService: CoursesServiceMock) {}

    ngOnInit() {
      this.courses = this.coursesService.getCourses();
    }

    onChildDelete(id: number) {
      this.courses = this.courses.filter(item => item.id !== id);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [CourseCardModule],
      providers: [CoursesServiceMock]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
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

    it('should delete pointed course after click delete button', () => {
      const deleteButtons: DebugElement[] = compiled.queryAll(
        By.css('.js-delete')
      );

      deleteButtons[2].triggerEventHandler('click', null);

      expect(testHost.courses).toEqual([{ id: 1 }, { id: 2 }] as ICourse[]);
    });
  });
});
