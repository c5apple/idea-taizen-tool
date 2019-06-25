import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page08SerendipityCardsComponent } from './page08-serendipity-cards.component';

describe('Page08SerendipityCardsComponent', () => {
  let component: Page08SerendipityCardsComponent;
  let fixture: ComponentFixture<Page08SerendipityCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page08SerendipityCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page08SerendipityCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
