import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CartInfo } from '../models/cart-info';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getCartInfo(): CartInfo {
    return this.cartItems.reduce((accumulator, currItem) => {
      const itemQuantity = currItem.quantity;
      const itemPrice = currItem.product.price;

      accumulator.itemCount += itemQuantity;
      accumulator.totalPrice += itemPrice * itemQuantity;

      return accumulator;

    }, {itemCount: 0, totalPrice: 0});
  }

  addCartItem(cartItem: CartItem) {
    if (cartItem.quantity < 1) {
      return;
    }

    const available = this.calculateAvailable(cartItem);

    if (available >= 0) {
      const res = this.findCartItemIndex(cartItem);
      if (res >= 0) {
        this.cartItems[res].quantity += cartItem.quantity;
      }
      else {
        this.cartItems.push(cartItem);
      }
    }
  }
  
  deleteCartItem(cartItem: CartItem) {
    const res = this.findCartItemIndex(cartItem);

    if (res >= 0) {
      this.cartItems.splice(res, 1);
    }
  }

  private findCartItem(cartItem: CartItem) {
    return this.cartItems.find((elem) => {
      return elem.product.id == cartItem.product.id;
    })
  }

  private findCartItemIndex(cartItem: CartItem) {
    const res = this.cartItems.findIndex((elem) => {
      return elem.product.id == cartItem.product.id;
    })

    return res;
  }

  calculateAvailable = (cartItem: CartItem) => {
    const res = this.findCartItem(cartItem);

    if (res) {
      return res.product.quantity - (res.quantity + cartItem.quantity);
    }
      return cartItem.product.quantity - cartItem.quantity
  }
}
