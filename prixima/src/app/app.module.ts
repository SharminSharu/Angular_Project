import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from "swiper/angular";


import { ServiceComponent } from './service/service.component';
import { HeadComponent } from './head/head.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ReviewComponent } from './review/review.component';
import { BlogComponent } from './blog/blog.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';
import { FootComponent } from './foot/foot.component';
import { AboutBodyComponent } from './about-body/about-body.component';
import { HeadPartComponent } from './head-part/head-part.component';
import { ServiceBodyComponent } from './service-body/service-body.component';
import { BlogBodyComponent } from './blog-body/blog-body.component';
import { ClientComponent } from './client/client.component';
import { BlogBody2Component } from './blog-body2/blog-body2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    HeadComponent,
    PortfolioComponent,
    TeamComponent,
    ReviewComponent,
    BlogComponent,
    TestComponent,
    ContactComponent,
    FootComponent,
    AboutBodyComponent,
    HeadPartComponent,
    ServiceBodyComponent,
    BlogBodyComponent,
    ClientComponent,
    BlogBody2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   SwiperModule
    // CarouselModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
