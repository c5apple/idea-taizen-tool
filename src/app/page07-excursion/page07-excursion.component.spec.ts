import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page07ExcursionComponent } from './page07-excursion.component';

describe('Page07ExcursionComponent', () => {
  let component: Page07ExcursionComponent;
  let fixture: ComponentFixture<Page07ExcursionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page07ExcursionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page07ExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
