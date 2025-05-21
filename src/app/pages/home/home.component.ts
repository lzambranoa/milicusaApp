import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, AboutComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
