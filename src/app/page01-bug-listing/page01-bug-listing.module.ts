import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page01BugListingComponent } from './page01-bug-listing.component';
import { TimerModule } from '../shared/component/timer/timer.module';

@NgModule({
  declarations: [Page01BugListingComponent],
  imports: [
    CommonModule,
    TimerModule
  ]
})
export class Page01BugListingModule { }
