import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page01BugListingComponent } from './page01-bug-listing/page01-bug-listing.component';
import { Page02FocusingComponent } from './page02-focusing/page02-focusing.component';
import { Page03ThinkingAtTheEdgeMySentenceSheetComponent } from './page03-thinking-at-the-edge-my-sentence-sheet/page03-thinking-at-the-edge-my-sentence-sheet.component';
import { Page04EdisonsNotesComponent } from './page04-edisons-notes/page04-edisons-notes.component';
import { Page05NonstopWritingComponent } from './page05-nonstop-writing/page05-nonstop-writing.component';

const routes: Routes = [
  { path: '', component: Page01BugListingComponent },
  { path: 'bug-listing', component: Page01BugListingComponent },
  { path: 'focusing', component: Page02FocusingComponent },
  { path: 'thinking-at-the-edge-my-sentence-sheet', component: Page03ThinkingAtTheEdgeMySentenceSheetComponent },
  { path: 'edisons-notes', component: Page04EdisonsNotesComponent },
  { path: 'nonstop-writing', component: Page05NonstopWritingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
