import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../product.modal';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: Iproduct[] = [];
  checkoutForm: FormGroup;

  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: '',
      address: '',
    });
  }
  ngOnInit(): void {
    this.loadCartItems();
  }
  loadCartItems() {
    this.cartItems = this.cartService.getItems();
  }
  clearCart() {
    this.cartItems = this.cartService.clearCart();
  }
  onSubmit() {
    this.clearCart();
    this.checkoutForm.reset();
  }
  calculateTotal(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.qtty * item.price;
    }
    return total;
  }
  calculateService(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.qtty * item.price * 1.1;
    }
    return total;
  }
  plusFunc(item: Iproduct) {
    item.qtty++;
  }

  minusFunc(item: Iproduct) {
    if (item.qtty > 1) {
      item.qtty--;
    } else {
      this.removeItem(item);
    }
  }
  removeItem(item: Iproduct) {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem !== item);
    if (this.cartItems.length === 0) {
      this.clearCart();
    }
  }
}
