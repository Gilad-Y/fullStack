import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetter]'
})
export class BetterDirective implements OnInit {

  constructor(private ElementRef:ElementRef) { }
  ngOnInit(): void {
    this.ElementRef.nativeElement.style.color="black";
  }
  @HostListener('mouseenter') mouseEnter(){
    this.ElementRef.nativeElement.style.color="green"
  }
  @HostListener('mouseleave') mouseLeave(){
    this.ElementRef.nativeElement.style.color="black"
  }

}
