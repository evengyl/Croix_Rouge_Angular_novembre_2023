import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Zoomit]'
})
export class ZoomitDirective {

  constructor(private el : ElementRef) {
    this.el.nativeElement.style.color = "red"
    this.el.nativeElement.style.fontSize = "2rem"
    this.el.nativeElement.style.backgroundColor = "yellow"
  }

}



@Directive({
  selector: '[ZoomitEvent]'
})
export class ZoomitEventDirective {

  @HostListener('mouseenter')
  onMouseEnter(){
    this.el.nativeElement.style.color = "red"
    this.el.nativeElement.style.fontSize = "2rem"
    this.el.nativeElement.style.backgroundColor = "yellow"
  }


  @HostListener('mouseleave')
  onMouseLeave(){
    this.el.nativeElement.style.color = "white"
    this.el.nativeElement.style.fontSize = "1rem"
    this.el.nativeElement.style.backgroundColor = "transparent"
  }

  constructor(private el : ElementRef) {
  }

}








@Directive({
  selector: '[ZoomitEventParams]'
})
export class ZoomitEventParamsDirective {

  @Input() ZoomitEventParams : string[] = []

  @HostListener('mouseenter')
  onMouseEnter(){
    this.el.nativeElement.style.color = this.ZoomitEventParams[0]
    this.el.nativeElement.style.fontSize = this.ZoomitEventParams[1]
    this.el.nativeElement.style.backgroundColor = this.ZoomitEventParams[2]
  }


  @HostListener('mouseleave')
  onMouseLeave(){
    this.el.nativeElement.style.color = "white"
    this.el.nativeElement.style.fontSize = "1rem"
    this.el.nativeElement.style.backgroundColor = "transparent"
  }

  constructor(private el : ElementRef) {
  }

}
