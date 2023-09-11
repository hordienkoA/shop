import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickStyleDirective } from './directives/click-style.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HighlightDirective,
    ClickStyleDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HighlightDirective,
    ClickStyleDirective,
    OrderByPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
