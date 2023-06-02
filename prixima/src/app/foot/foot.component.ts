import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  foot:any;
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service.getfoot().subscribe(data=>{
      this.foot=data;
      console.log(data);
    })
}
}
