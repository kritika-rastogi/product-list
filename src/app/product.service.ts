import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { ProductList } from './product-data';
 
@Injectable()
export class ProductService {
 
  constructor() { }
 
  getProducts(): Observable<Product[]> {
    return of(ProductList);
  }
  
  getProduct(id: number):  Observable<Product> {
    return of(ProductList.find(product => product.id === id));
  }
}