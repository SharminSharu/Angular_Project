import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
about:any;
   
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service.getabout().subscribe(data=>{
      this.about=data;
      console.log(data);
    })
}
}