import { Component, OnInit, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { CourseCardComponent } from './course-card.component';

import { CourseCardModule } from './course-card.module';
import { CoursesService } from 'src/app/components/courses/services/courses.service';
import { ICourse } from 'src/app/components/courses/interfaces/courses.interface';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('CourseCardComponent-Test-Host', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  const coursesMock = [{ id: 1 }, { id: 2 }, { id: 3 }] as ICourse[];

  class CoursesServiceMock implements Partial<CoursesService> {
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
      imports: [RouterTestingModule, AppRoutingModule, CourseCardModule],
      providers: [CoursesServiceMock]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should exists', () => {
    expect(testHost).toBeTruthy();
  });

  describe('render', () => {
    let compiled: HTMLElement;

    beforeEach(() => {
      compiled = fixture.nativeElement;
    });

    it('should render correct quantity of course-cards', () => {
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
