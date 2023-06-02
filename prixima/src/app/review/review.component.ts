import { Component,ViewEncapsulation,OnInit} from '@angular/core';
import { CategoryService } from '../servive/category.service';
// import { OwlOptions} from 'ngx-owl-carousel-o';
// import Swiper core and required modules
import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay,Navigation, Pagination, Scrollbar, A11y]);

// install Swiper modules
// SwiperCore.use([Pagination]);



@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ReviewComponent  implements OnInit{
  
 review:any;
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service. getreview().subscribe(data=>{
      this.review=data;
    })
}
}
