import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductSelectComponent } from "./components/product-select/product-select.component";
import { GalleryProductComponent } from './components/product-gallery/gallery-product.component';

@Component({
  selector: 'app-product',
  imports: [ProductSelectComponent, GalleryProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent { }
