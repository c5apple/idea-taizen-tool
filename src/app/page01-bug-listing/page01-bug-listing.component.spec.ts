import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page01BugListingComponent } from './page01-bug-listing.component';

describe('Page01BugListingComponent', () => {
  let component: Page01BugListingComponent;
  let fixture: ComponentFixture<Page01BugListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page01BugListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page01BugListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
