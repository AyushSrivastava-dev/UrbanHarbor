import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from '../shared/backend-api.service';
import { Product } from '../shared/product';
import { ProductTypeService } from '../shared/product-type.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  productList: any = new Product;
  productBrand:any=[];
  container:any=[];
  allPrice:any=[];
  minPrice:any;
  maxPrice:any;
  minR:any;
  maxR:any;
  selectedBrand:any;
  formValue:FormGroup =new FormGroup({minR:new FormControl(''),maxR:new FormControl('')})
  constructor(private router: Router, private backEndApi: BackendApiService,private productType:ProductTypeService) {

  }

ngOnInit(): void {
  this.backEndApi.getAllProductsPriceList(sessionStorage.getItem('token'))
  .subscribe({
    next: res => {
      this.allPrice=res;
      this.backEndApi.setPriceList(res);
      
    }
  })
  this.selectedBrand = '';
  this.backEndApi.getAllProductsList().subscribe({
    next: result => {
      this.productList = result; 
      console.log("got all products list");
      //Updates the current ProductList with new filtered result list.
      this.productType.setProductList(result);
      for (let item of this.productType.getProductList()) {
        let val=this.getPrice(item.productCode);
        item.price=val;
    
      } 
    }
    , error: err => {
      console.log("Some error occured in Product List");
    }, complete: () => {
      this.productBrand = [];
      for (var b of this.productList) {
        this.productBrand.push(b.brand);
      }
      this.productBrand = Array.from(new Set(this.productBrand));
    },
  })
}

findProduct(value: string) {//To search for a product in product list and to set the productType and brand together.
  this.backEndApi.searchProductByKeywords(value).subscribe({
    next: result => {
      this.productList = result;
      this.productType.setProductList(result);
      for (let item of this.productType.getProductList()) {
        let val=this.getPrice(item.productCode);
        item.price=val;
      }
    }
    , error: err => {
      console.log("Some error occured in searching the products");

    }, complete: () => {
      this.productList = this.productType.getProductList();
      this.productBrand = [];
      for (var b of this.productList) {
        this.productBrand.push(b.brand);
      }
      this.productBrand = Array.from(new Set(this.productBrand));
    },
  })
}


logout() { //To perform logout operations
  this.backEndApi.logOut();
  this.router.navigate(["display"]);
  location.reload();
}
clearAllFilters() { //To relod the webpage without any filter.
  location.reload();

}

viewDetails(code: any) {
  this.router.navigate(["view-product"]);
}
home() {
  location.reload();
}
getPrice(val:any){
  const ans=this.searchByField(this.backEndApi.getPriceList(),'productCode',val,'price');
  return ans;
 }
UpdateMinMax() {
  this.minPrice = this.formValue.value.minR;
  this.maxPrice = this.formValue.value.maxR;
}

LoggedIn() {
  console.log("yes logged in");
  return this.backEndApi.isUserLoggedIn();
}
login() {
  this.router.navigate(["login"])

}
searchByField(data:any, reqField:any, value:any, resField:any) {
  this.container = data;
   for (var i = 0; i < this.container?.length; i++) {
     if (this.container[i][reqField] == value) {  
         return(this.container[i][resField]);
     }
 }
 
}

}