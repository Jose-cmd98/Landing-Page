import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollBtnDirective } from './scroll-btn.directive';



@NgModule({
  declarations: [
    ScrollBtnDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ScrollBtnDirective]
})
export class DirectivesModule { }
