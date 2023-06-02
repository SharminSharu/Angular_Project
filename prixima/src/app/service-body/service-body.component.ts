import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-service-body',
  templateUrl: './service-body.component.html',
  styleUrls: ['./service-body.component.css']
})
export class ServiceBodyComponent implements OnInit  {
  ser:any;
  general:any;
   
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service.getservice().subscribe(data=>{
      this.ser=data;
      console.log(data);
    })
   
    this.service.getgenarel().subscribe(data=>{
      this.general=data;
    })
}
}
