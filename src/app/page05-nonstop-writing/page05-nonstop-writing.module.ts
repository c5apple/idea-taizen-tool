import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page05NonstopWritingComponent } from './page05-nonstop-writing.component';
import { TimerModule } from '../shared/component/timer/timer.module';

@NgModule({
  declarations: [Page05NonstopWritingComponent],
  imports: [
    CommonModule,
    TimerModule
  ]
})
export class Page05NonstopWritingModule { }
