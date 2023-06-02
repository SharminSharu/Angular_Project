import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-head-part',
  templateUrl: './head-part.component.html',
  styleUrls: ['./head-part.component.css']
})
export class HeadPartComponent implements OnInit {
  general:any;
  constructor(private service:CategoryService){}
  ngOnInit():void{

    this.service.getgenarel().subscribe(data=>{
      this.general=data;
    })
   
}
}
