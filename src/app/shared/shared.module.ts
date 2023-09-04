import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickStyleDirective } from './directives/click-style.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ClickStyleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ClickStyleDirective
  ]
})
export class SharedModule { }
