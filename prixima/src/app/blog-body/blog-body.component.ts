import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-blog-body',
  templateUrl: './blog-body.component.html',
  styleUrls: ['./blog-body.component.css']
})
export class BlogBodyComponent implements OnInit {
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
