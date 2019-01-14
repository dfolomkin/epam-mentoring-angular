import { Component, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as moment from 'moment';
import { includes } from 'lodash';

import {
  CourseCardBorderDirective,
  CLASSES
} from './course-card-border.directive';

describe('CourseCardBorderDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  @Component({
    template: `
      <div [appCourseCardBorder]="date"></div>
    `
  })
  class TestHostComponent implements OnInit {
    date: Date;

    constructor() {}

    ngOnInit() {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, CourseCardBorderDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('render', () => {
    let compiled: HTMLElement;

    beforeEach(() => {
      compiled = fixture.nativeElement;
    });

    it('should add "fresh" class to host', () => {
      testHost.date = moment()
        .subtract(13, 'days')
        .toDate();

      console.log('test host date', testHost.date);

      expect(includes(compiled.classList, CLASSES.fresh)).toBe(true);
    });

    // it('should add "futher" class to host', () => {
    //   testHost.setDate(
    //     moment()
    //       .add(1, 'days')
    //       .toDate()
    //   );

    //   expect(includes(compiled.classList, CLASSES.futher)).toBe(true);
    // });

    // it('should add "default" class to host', () => {
    //   testHost.setDate(
    //     moment()
    //       .subtract(100, 'days')
    //       .toDate()
    //   );

    //   expect(includes(compiled.classList, CLASSES.default)).toBe(true);
    // });
  });
});
