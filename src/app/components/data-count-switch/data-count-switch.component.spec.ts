import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCountSwitchComponent } from './data-count-switch.component';

describe('DataCountSwitchComponent', () => {
  let component: DataCountSwitchComponent;
  let fixture: ComponentFixture<DataCountSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCountSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCountSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
