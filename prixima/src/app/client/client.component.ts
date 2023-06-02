import { Component,ViewEncapsulation} from '@angular/core';
import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { CategoryService } from '../servive/category.service';


// install Swiper modules
SwiperCore.use([Autoplay,Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ClientComponent {

}
