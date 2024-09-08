import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="productForm" class="p-3 bg-body-tertiary" (submit)="handleSubmit($event)">
      <div class="col">
        <p class="form-text text-muted">{{"€" + product.price}}</p>
        <div class="row">
          <div class="col">
            <input formControlName="amount" type="number" class="form-control" placeholder="Amount" min="1">
            <p class="form-text text-muted">{{cartService.calculateAvailable({product: product, quantity: 0})}} available</p>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  `,
  styles: ``
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
