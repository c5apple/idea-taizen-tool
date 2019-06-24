import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page01BugListingModule } from './page01-bug-listing/page01-bug-listing.module';
import { Page02FocusingModule } from './page02-focusing/page02-focusing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Page01BugListingModule,
    Page02FocusingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
