import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImp]'
})
export class ImpDirective {

  constructor(private _elementRef:ElementRef) {
    
    this._elementRef.nativeElement.style.color = 'red';

   }

}
