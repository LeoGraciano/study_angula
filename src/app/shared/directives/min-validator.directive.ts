import { Directive, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';


@Directive({
  selector: '[minValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinValidatorDirective,
    multi: true
  }]
})

export class MinValidatorDirective implements Validator, OnInit {

  @Input("minValue") minValue: string = "0";

  constructor() { }
  ngOnInit() { }

  validate(c: FormControl) {
    let v: number = +c.value;
    console.log(c);

    if (isNaN(v)) {
      return { 'min': true, 'requiredValue': 18 }
    }

    if (v < +this.minValue) {
      return { 'min': true, 'requiredValue': 18 }
    };

    return null

  };

}
