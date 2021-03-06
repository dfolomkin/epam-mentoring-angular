import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from './filter-bar.component';

import { SearchService } from 'src/app/commons/services/search.service';

xdescribe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [FormsModule],
      providers: [SearchService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should exists', () => {
    expect(component).toBeTruthy();
  });

  // it('should set this.searchQuery', () => {
  // });

  // it('should calls methods', () => {
  // });
});
