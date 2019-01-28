import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';

import { ControlBarModule } from 'src/app/components/control-bar/control-bar.module';
import { CoursesListModule } from 'src/app/components/courses-list/courses-list.module';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      imports: [ControlBarModule, CoursesListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
