import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	product;
	constructor(
	  private route: ActivatedRoute,
	  private productService: ProductService,
	  private location: Location
	) {}

	ngOnInit() {
		this.getProduct()
	}

	getProduct(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.productService.getProduct(id)
	    .subscribe(product => this.product = product);
	}
}
