import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MinValidatorDirective, NumericDirective } from './directives';
import { UpperCasePipe } from './pipes';

@NgModule({
  declarations: [
    NumericDirective,
    MinValidatorDirective,
    UpperCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumericDirective,
    MinValidatorDirective,
    UpperCasePipe
  ]
})

export class SharedModule { }
