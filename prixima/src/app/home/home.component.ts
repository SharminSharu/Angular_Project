import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit{
  about:any;
 general:any;
 slider:any;
ser:any;


  
  
    constructor(private service:CategoryService){}
    ngOnInit():void{
      
      this.service.getabout().subscribe(data=>{
        this.about=data;
        console.log(data);
      })
      this.service. getgenarel().subscribe(data=>{
        this.general=data;
      })
      this.service. getslider().subscribe(data=>{
        this.slider=data;
      })
      this.service. getservice().subscribe(data=>{
        this.ser=data;
      })
      this.service.getabout().subscribe(data=>{
        this.about=data;
       
      })
 
  
  }
  
  }