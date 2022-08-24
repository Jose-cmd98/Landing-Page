import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollBtn]'
})
export class ScrollBtnDirective {

  constructor(private _element: ElementRef) {

  }

  @HostListener('window:scroll', ['$event'])
  public scrollEvent(): void {
    const posicaoScrollY = window.scrollY;
    const visivel = posicaoScrollY > 82;

    if(visivel) {
      this._element.nativeElement.classList.add('show');
    } else {
      this._element.nativeElement.classList.remove('show');
    }
  }
}
