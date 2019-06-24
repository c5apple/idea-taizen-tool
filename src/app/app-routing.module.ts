import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page01BugListingComponent } from './page01-bug-listing/page01-bug-listing.component';
import { Page02FocusingComponent } from './page02-focusing/page02-focusing.component';

const routes: Routes = [
  { path: '', component: Page01BugListingComponent },
  { path: 'bug-listing', component: Page01BugListingComponent },
  { path: 'focusing', component: Page02FocusingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
