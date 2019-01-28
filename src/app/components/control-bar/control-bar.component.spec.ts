import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBarComponent } from './control-bar.component';

import { SearchBarModule } from 'src/app/components/search-bar/search-bar.module';

describe('ControlBarComponent', () => {
  let component: ControlBarComponent;
  let fixture: ComponentFixture<ControlBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlBarComponent],
      imports: [SearchBarModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
