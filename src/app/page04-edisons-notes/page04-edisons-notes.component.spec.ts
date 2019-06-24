import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page04EdisonsNotesComponent } from './page04-edisons-notes.component';

describe('Page04EdisonsNotesComponent', () => {
  let component: Page04EdisonsNotesComponent;
  let fixture: ComponentFixture<Page04EdisonsNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page04EdisonsNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page04EdisonsNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
