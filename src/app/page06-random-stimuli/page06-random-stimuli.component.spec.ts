import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page06RandomStimuliComponent } from './page06-random-stimuli.component';

describe('Page06RandomStimuliComponent', () => {
  let component: Page06RandomStimuliComponent;
  let fixture: ComponentFixture<Page06RandomStimuliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page06RandomStimuliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page06RandomStimuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
