import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-select',
  imports: [],
  templateUrl: './product-select.component.html',
  styleUrl: './product-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSelectComponent { }
