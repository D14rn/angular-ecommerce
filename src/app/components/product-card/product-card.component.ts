import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductItemFormComponent } from '../product-item-form/product-item-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductItemFormComponent, RouterLink],
  template: `
    <div class='card'>
      <a class="nav-link" routerLink='/details/{{product.id}}'>
      <img class="card-img-top product-card-image" src={{product.mainImage}}/>
      <div class="card-body">
        <h5 class="card-title text-truncate">{{product.name}}</h5>
      </div>
      </a>
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
