import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page02FocusingComponent } from './page02-focusing.component';

describe('Page02FocusingComponent', () => {
  let component: Page02FocusingComponent;
  let fixture: ComponentFixture<Page02FocusingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page02FocusingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page02FocusingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
