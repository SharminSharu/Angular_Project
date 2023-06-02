import { Component,ViewEncapsulation,OnInit} from '@angular/core';
import SwiperCore, {Autoplay,  Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { CategoryService } from '../servive/category.service';


// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  port:any;

  constructor(private service:CategoryService){}
  ngOnInit():void{


    this.service.getport().subscribe(data=>{
      this.port=data;
    })
   
}
}
