import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page05NonstopWritingComponent } from './page05-nonstop-writing.component';

describe('Page05NonstopWritingComponent', () => {
  let component: Page05NonstopWritingComponent;
  let fixture: ComponentFixture<Page05NonstopWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page05NonstopWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page05NonstopWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
