import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page01BugListingComponent } from './page01-bug-listing/page01-bug-listing.component';

const routes: Routes = [
  { path: '', component: Page01BugListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
