import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-about-body',
  templateUrl: './about-body.component.html',
  styleUrls: ['./about-body.component.css']
})
export class AboutBodyComponent implements OnInit {
  about:any;
   
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service.getabout().subscribe(data=>{
      this.about=data;
      console.log(data);
    })
}
}
