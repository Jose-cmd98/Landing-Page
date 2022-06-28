import SwiperCore, { Autoplay, EffectCreative, EffectCube, EffectFade, Navigation, Pagination } from "swiper";
import { Component, OnInit } from '@angular/core';


SwiperCore.use([EffectFade, Autoplay,Pagination, Navigation, EffectCreative])

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
