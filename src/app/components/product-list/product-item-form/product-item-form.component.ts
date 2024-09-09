import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-item-form.component.html',
  styleUrl: './product-item-form.component.css'
})
export class ProductItemFormComponent {
  @Input() product!: Product;
  cartService: CartService = inject(CartService);
  productForm = new FormGroup({
    amount: new FormControl(1)
  });

  handleSubmit(e: Event) {
    e.preventDefault();

    const product = this.product;
    const quantity = this.productForm.value.amount ?? 0;

    this.cartService.addCartItem(
      {
        product: product,
        quantity: quantity
      }
    )
  }
}
