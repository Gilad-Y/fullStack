import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazy]'
})
export class LazyDirective implements OnInit{
@HostBinding('style.color')clr="black";
  constructor() { }
  ngOnInit(): void {

  }
  @HostListener('mouseenter') mouseEnter(){
    this.clr='green'
  }
  @HostListener('mouseleave')mouseLeave(){
    this.clr='black'
  }
}
