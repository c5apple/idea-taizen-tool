import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/component/header/header.module';
import { Page01BugListingModule } from './page01-bug-listing/page01-bug-listing.module';
import { Page02FocusingModule } from './page02-focusing/page02-focusing.module';
import { Page03ThinkingAtTheEdgeMySentenceSheetModule } from './page03-thinking-at-the-edge-my-sentence-sheet/page03-thinking-at-the-edge-my-sentence-sheet.module';
import { Page04EdisonsNotesModule } from './page04-edisons-notes/page04-edisons-notes.module';
import { Page05NonstopWritingModule } from './page05-nonstop-writing/page05-nonstop-writing.module';
import { Page06RandomStimuliModule } from './page06-random-stimuli/page06-random-stimuli.module';
import { Page07ExcursionModule } from './page07-excursion/page07-excursion.module';
import { Page08SerendipityCardsModule } from './page08-serendipity-cards/page08-serendipity-cards.module';
import { Page09FinkesAmbiguousPartsModule } from './page09-finkes-ambiguous-parts/page09-finkes-ambiguous-parts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    Page01BugListingModule,
    Page02FocusingModule,
    Page03ThinkingAtTheEdgeMySentenceSheetModule,
    Page04EdisonsNotesModule,
    Page05NonstopWritingModule,
    Page06RandomStimuliModule,
    Page07ExcursionModule,
    Page08SerendipityCardsModule,
    Page09FinkesAmbiguousPartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
