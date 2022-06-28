import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(){
    let element = document.getElementById('#nav') as HTMLElement;
    if(window.pageYOffset > 50){
      element.classList.add('navbar-inverse')
    } else{
      element.classList.remove('navbar-inverse');
    }

  }

}
