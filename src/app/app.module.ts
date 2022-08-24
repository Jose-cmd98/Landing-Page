import { DirectivesModule } from './core/directives/directives.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// uiKit
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardsComponent } from './view/cards/cards.component';
import { SwiperModule } from 'swiper/angular';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    SwiperModule,
    NgbModule,
    NgbCollapseModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
