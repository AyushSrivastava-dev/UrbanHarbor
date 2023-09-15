import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductTypeService {
  productList: any;

  constructor() { }

  setProductList(item: any) {
    this.productList = item;
  }
  getProductList() {
    return this.productList;
  }
  
}

