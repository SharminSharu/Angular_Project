import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  ser:any;
   
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service.getservice().subscribe(data=>{
      this.ser=data;
      console.log(data);
    })
}
}
