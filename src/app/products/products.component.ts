import { Component } from '@angular/core';
import { Iproduct } from '../product.modal';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Iproduct[];
  constructor(private CS: CartService) {
    this.products = products;
  }
  addToCart(product: Iproduct) {
    this.CS.addToCart(product);
  }
}
