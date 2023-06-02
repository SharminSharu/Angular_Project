import { Component,ViewEncapsulation,OnInit} from '@angular/core';
import { CategoryService } from '../servive/category.service';
// import { OwlOptions} from 'ngx-owl-carousel-o';
// import Swiper core and required modules
import SwiperCore, {Autoplay,  Navigation, Pagination, Scrollbar, A11y } from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class HeadComponent implements OnInit{

  
  general:any;
  slider:any;
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service. getgenarel().subscribe(data=>{
      this.general=data;
    })
    this.service. getslider().subscribe(data=>{
      this.slider=data;
    })

  // }
  // constructor(){ }
  // ngOnInit(){
  //   customOptions:OwlOptions= {
  //     loop: true,
  //     mouseDrag: true,
  //     touchDrag: true,
  //     pullDrag: false,
  //     dots: true,
  //     navSpeed: 700,
  //     navText: ['', ''],
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       400: {
  //         items: 2
  //       },
  //       740: {
  //         items: 2
  //       },
  //       940: {
  //         items: 1
  //       }
  //     },
  //     nav: true
  //   }

}
}

