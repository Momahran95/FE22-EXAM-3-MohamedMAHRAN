import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../product.modal';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  products: Iproduct[];
  product: Iproduct;
  id: number = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.products = products;
    const id = +this.route.snapshot.params['id'];
    this.product = this.products[id];
  }
  addToCart() {
    this.cartService.addToCart(this.product);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = products[this.id];
    });
  }
}
