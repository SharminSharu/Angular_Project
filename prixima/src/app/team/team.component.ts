import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  team:any;
   
  constructor(private service:CategoryService){}
  ngOnInit():void{
    this.service.getteam().subscribe(data=>{
      this.team=data;
      console.log(data);
    })
}
}
