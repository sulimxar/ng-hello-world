import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[title]'
})
export class TitleDirective {
  @Input('title') title: any;

  constructor(private el: ElementRef) {
   }

}
