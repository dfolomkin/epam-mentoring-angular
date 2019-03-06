import { DebugElement, Pipe, PipeTransform } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { remove } from 'lodash';

import { CoursesListComponent } from './courses-list.component';

import { CourseCardModule } from 'src/app/components/course-card/course-card.module';
import { CoursesService } from 'src/app/components/courses/services/courses.service';
import { SearchService } from 'src/app/commons/services/search.service';
import { ICourse } from 'src/app/components/courses/interfaces/courses.interface';
import { NO_DATA_PLACEHOLDER } from './courses-list.component';

describe('CoursesListComponent-Stand-Alone', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  let coursesMock: ICourse[];
  const coursesServiceMock: Partial<CoursesService> = {
    getCourses: () => coursesMock,
    deleteCourse: id => remove(coursesMock, item => item.id === id)
  };

  @Pipe({ name: 'filter' })
  class FilterPipeMock implements PipeTransform {
    transform(courses: ICourse[], searchQuery: string): ICourse[] {
      return courses;
    }
  }

  @Pipe({
    name: 'orderByDate'
  })
  class OrderByDatePipeMock implements PipeTransform {
    transform(courses: ICourse[]): ICourse[] {
      return courses;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent, FilterPipeMock, OrderByDatePipeMock],
      imports: [CourseCardModule],
      providers: [CoursesService, SearchService]
    })
      .overrideComponent(CoursesListComponent, {
        set: {
          providers: [{ provide: CoursesService, useValue: coursesServiceMock }]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    coursesMock = [{ id: 1 }, { id: 2 }, { id: 3 }] as ICourse[];
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should exists', () => {
    expect(component).toBeTruthy();
  });

  it('should fill courses after render', () => {
    expect(component.courses).toEqual(coursesMock);
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

    it('should render placeholder if no data', () => {
      coursesMock = [] as ICourse[];
      fixture = TestBed.createComponent(CoursesListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('div').textContent).toContain(
        NO_DATA_PLACEHOLDER.toUpperCase()
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

      expect(component.courses).toEqual([{ id: 1 }, { id: 2 }] as ICourse[]);
    });
  });
});
