import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../servive/category.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit   {
  contact: any;
  general: any;
  // about: any;
  first: any;
  last: any;
  email: any;
  msg: any;

  constructor(private service: CategoryService) { }
  ngOnInit(){
  //   this.service.getcontact().subscribe(data => {
  //     this.contact = data;

    // })
    this.service.getgenarel().subscribe(data => {
      this.general = data;
    })
  }

    addcontact(){
      this.service.saveContact({ first: this.first, last: this.last, email: this.email, msg: this.msg }).subscribe(data => {
        this.first = '';
        this.last = '';
        this.email = '';
        this.msg = '';
        // this.service.getcontact().subscribe(data => {
        //   this.contact= data;
         
        // })
      })
    }
    // this.service. saveContact({first_name:this.first,last:this.last,email:this.email,msg:this.msg}).subscribe(data=>{
    //   this.contact=data;
    //   console.log(data);
    // })
  }



