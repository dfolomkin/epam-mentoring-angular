import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleControlComponent } from './title-control.component';

describe('TitleControlComponent', () => {
  let component: TitleControlComponent;
  let fixture: ComponentFixture<TitleControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
