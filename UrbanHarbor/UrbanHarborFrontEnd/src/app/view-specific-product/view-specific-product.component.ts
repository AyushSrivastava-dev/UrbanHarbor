import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendApiService } from '../shared/backend-api.service';
import { Pincode } from '../shared/pincode';

@Component({
  selector: 'app-view-specific-product',
  templateUrl: './view-specific-product.component.html',
  styleUrls: ['./view-specific-product.component.css'],
})
export class ViewSpecificProductComponent implements OnInit {
  productcode: any;
  productBrand: any;
  productName: any;
  productDescription: any;
  productPrice: any;
  productImageUrl: any;
  PinCode!: any;
  NoOfDays: any;
  showAdd!: boolean;
  showError!: boolean;
  pincodeList: any = new Pincode();
  container: any = [];
  allPrice: any = [];

  constructor(
    private router: Router,
    private backEndApi: BackendApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showAdd = false;
    this.showError = false;

    this.backEndApi
      .getAllProductsPriceList(sessionStorage.getItem('token'))
      .subscribe({
        next: (res) => {
          this.allPrice = res;
          this.backEndApi.setPriceList(res);
          console.log(res, 'prices');
        },
      });
    this.backEndApi
      .getProduct(
        this.activatedRoute.snapshot.params['productCode'],
        sessionStorage.getItem('token')
      )
      .subscribe((result) => {
        console.log(result);
        this.productcode = result[0].productCode;
        this.productBrand = result[0].brand;
        this.productName = result[0].name;
        this.productImageUrl = result[0].imageUrl;
        this.productDescription = result[0].description;
        this.productPrice = result[0].price;
      });
  }

  serviceAbilityChecker(item: any) {
    this.showAdd = false;
    this.showError = false;
    this.backEndApi
      .productServiceAbility(item, sessionStorage.getItem('token'))
      .subscribe(
        (data) => {
          if (data.length == 0) {
            this.showError = true;
          } else {
            this.pincodeList = data;
            this.PinCode = data[0].pincode;
            this.NoOfDays = data[0].noOfDays;
            this.showAdd = true;
          }
        },
        (error) => {
          console.log('No response');
        }
      );
  }

  clear() {
    location.reload();
  }

  searchByField(data: any, reqField: any, value: any, resField: any) {
    this.container = data;
    for (var i = 0; i < this.container?.length; i++) {
      if (this.container[i][reqField] == value) {
        return this.container[i][resField];
      }
    }
  }

  getPrice(val: any) {
    console.log(val);
    const ans = this.searchByField(
      this.backEndApi.getPriceList(),
      'productCode',
      val,
      'price'
    );
    return ans;
  }
}
