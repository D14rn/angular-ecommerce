import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CartInfo } from '../models/cart-info';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [
    { product: { id: "30e99341347c49043afec20f701", name: "Produit 1", price: 100, quantity: 3, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 5}, quantity: 1},
    { product: { id: "908dbb2b470ed9c51afec20f701", name: "Produit 2", price: 1000, quantity: 1, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4}, quantity: 2}
  ];
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
}
