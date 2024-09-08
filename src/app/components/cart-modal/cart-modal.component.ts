import { Component, inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { CartInfo } from '../../models/cart-info';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [],
  templateUrl: './cart-modal.component.html',
  styles: `
    .cart-item-image {
      height: 2em;
    }
    .cart-table-row {
      line-height: 2em;
      height: 2em;
    }
  `
})
export class CartModalComponent {
  modalService = inject(NgbModal);
  cartService = inject(CartService);
  cartItems: CartItem[] = [];

	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
}
