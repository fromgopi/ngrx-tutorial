import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../store/market';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../models/product/product.model';
import * as Cart from '../actions/product/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private store: Store<any>) { }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      const id = p['id'];
      const result = Array.prototype.filter.call(PRODUCTS, (v) => v.id === id);
      if (result.length > 0) {
        this.product = result[0];
      }
    });
  }

  addToCart(product){
    this.store.dispatch(new Cart.AddProduct(product));
  }

}
