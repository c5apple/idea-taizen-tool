import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page01BugListingModule } from './page01-bug-listing/page01-bug-listing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Page01BugListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
