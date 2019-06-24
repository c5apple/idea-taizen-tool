import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page03ThinkingAtTheEdgeMySentenceSheetComponent } from './page03-thinking-at-the-edge-my-sentence-sheet.component';

describe('Page03ThinkingAtTheEdgeMySentenceSheetComponent', () => {
  let component: Page03ThinkingAtTheEdgeMySentenceSheetComponent;
  let fixture: ComponentFixture<Page03ThinkingAtTheEdgeMySentenceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page03ThinkingAtTheEdgeMySentenceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page03ThinkingAtTheEdgeMySentenceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
