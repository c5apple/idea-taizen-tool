import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page09FinkesAmbiguousPartsComponent } from './page09-finkes-ambiguous-parts.component';

describe('Page09FinkesAmbiguousPartsComponent', () => {
  let component: Page09FinkesAmbiguousPartsComponent;
  let fixture: ComponentFixture<Page09FinkesAmbiguousPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page09FinkesAmbiguousPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page09FinkesAmbiguousPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
