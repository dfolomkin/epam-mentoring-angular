import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HeaderModule } from './components/header/header.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { FooterModule } from './components/footer/footer.module';
import { CoursesModule } from './containers/courses/courses.module';
import { CourseEditModule } from './containers/course-edit/course-edit.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HeaderModule,
        BreadcrumbsModule,
        FooterModule,
        CoursesModule,
        CourseEditModule
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'epm-angular'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   console.log(app);
  //   expect(app.title).toEqual('epm-angular');
  // });

  it('should render div.app-container', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-container')).toBeTruthy();
  });
});
