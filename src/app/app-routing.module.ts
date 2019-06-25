import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page01BugListingComponent } from './page01-bug-listing/page01-bug-listing.component';
import { Page02FocusingComponent } from './page02-focusing/page02-focusing.component';
import { Page03ThinkingAtTheEdgeMySentenceSheetComponent } from './page03-thinking-at-the-edge-my-sentence-sheet/page03-thinking-at-the-edge-my-sentence-sheet.component';
import { Page04EdisonsNotesComponent } from './page04-edisons-notes/page04-edisons-notes.component';
import { Page05NonstopWritingComponent } from './page05-nonstop-writing/page05-nonstop-writing.component';
import { Page06RandomStimuliComponent } from './page06-random-stimuli/page06-random-stimuli.component';
import { Page07ExcursionComponent } from './page07-excursion/page07-excursion.component';
import { Page08SerendipityCardsComponent } from './page08-serendipity-cards/page08-serendipity-cards.component';
import { Page09FinkesAmbiguousPartsComponent } from './page09-finkes-ambiguous-parts/page09-finkes-ambiguous-parts.component';

const routes: Routes = [
  { path: '', component: Page01BugListingComponent },
  { path: 'bug-listing', component: Page01BugListingComponent },
  { path: 'focusing', component: Page02FocusingComponent },
  { path: 'thinking-at-the-edge-my-sentence-sheet', component: Page03ThinkingAtTheEdgeMySentenceSheetComponent },
  { path: 'edisons-notes', component: Page04EdisonsNotesComponent },
  { path: 'nonstop-writing', component: Page05NonstopWritingComponent },
  { path: 'random-stimuli', component: Page06RandomStimuliComponent },
  { path: 'excursion', component: Page07ExcursionComponent },
  { path: 'serendipity-cards', component: Page08SerendipityCardsComponent },
  { path: 'finkes-ambiguous-parts', component: Page09FinkesAmbiguousPartsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
