import { Injectable } from '@angular/core';
import { Iproduct } from './product.modal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Iproduct[] = [];
  constructor() {}
  addToCart(product: Iproduct) {
    if (this.cartItems.find((val) => val.name == product.name)) {
      this.cartItems.map((val) =>
        val.name == product.name ? { ...val, qtty: val.qtty++ } : val
      );
    } else {
      let producT = { ...product };
      this.cartItems.push(producT);
    }
    console.log(this.cartItems);
  }
  getItems(): Iproduct[] {
    return this.cartItems;
  }
  clearCart(): Iproduct[] {
    this.cartItems = [];
    return this.cartItems;
  }

  getCartLength() {
    let length = 0;

    for (let val of this.cartItems) {
      length += val.qtty;
    }
    return length;
  }
}
