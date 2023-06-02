import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url='http://localhost/prixima_api/about.php';
    constructor(private http:HttpClient) { }
    getabout(){
      return this.http.get(this.url);
    }
    getgenarel(){
      return this.http.get('http://localhost/Prixima_Api/general_info.php');
    }
    getslider(){
      return this.http.get('http://localhost/Prixima_Api/slider.php');
    }
    getservice(){
      return this.http.get('http://localhost/Prixima_Api/service.php');
    }
    getport(){
      return this.http.get('http://localhost/Prixima_Api/portfolio.php');
    }
    getteam(){
      return this.http.get('http://localhost/Prixima_Api/team.php');
    }
    getreview(){
      return this.http.get('http://localhost/Prixima_Api/review.php');
    }
    getblog(){
      return this.http.get('http://localhost/Prixima_Api/blog.php');
    }  
      getfoot(){
      return this.http.get('http://localhost/Prixima_Api/foot.php');
    }
    getcontact(){
      return this.http.get('http://localhost/Prixima_Api/contact.php');
    }
    saveContact(data:any){
      return this.http.post('http://localhost/Prixima_Api/addcontact.php',JSON.stringify(data));
    }
}