import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductItemFormComponent } from '../product-item-form/product-item-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductItemFormComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
}
