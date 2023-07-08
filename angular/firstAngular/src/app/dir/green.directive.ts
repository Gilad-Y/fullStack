import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }

    ngOnInit(): void {
      this.elementRef.nativeElement.style.background="yellowgreen"
    }
}
