import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';
@Component({
  selector: 'app-blog-body2',
  templateUrl: './blog-body2.component.html',
  styleUrls: ['./blog-body2.component.css']
})
export class BlogBody2Component implements OnInit {
  blog:any;
  general:any;
  review:any;
  foot:any;
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service.getblog().subscribe(data=>{
      this.blog=data;
      console.log(data);
    })
    this.service.getgenarel().subscribe(data=>{
      this.general=data;
    })
    this.service. getreview().subscribe(data=>{
      this.review=data;
    })
    this.service.getfoot().subscribe(data=>{
      this.foot=data;
      console.log(data);
    })
}
}
