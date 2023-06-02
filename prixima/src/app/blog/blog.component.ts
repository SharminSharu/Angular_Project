import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog:any;
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service.getblog().subscribe(data=>{
      this.blog=data;
      console.log(data);
    })
}
}
