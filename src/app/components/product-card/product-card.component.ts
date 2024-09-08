import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductItemFormComponent } from '../product-item-form/product-item-form.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductItemFormComponent],
  template: `
    <div class='card'>
      <img class="card-img-top product-card-image" src={{product.mainImage}}/>
      <div class="card-body">
        <h5 class="card-title text-truncate">{{product.name}}</h5>
      </div>
      <app-product-item-form [product]=product/>
    </div>
  `,
  styles: `
    .product-card-image {
      max-height: 200px;
      object-fit: contain;
    }
  `
})
export class ProductCardComponent {
  @Input() product!: Product;
}
