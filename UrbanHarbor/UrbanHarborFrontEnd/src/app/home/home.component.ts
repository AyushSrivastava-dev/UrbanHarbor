/*
 * Product_Catalog_System(FrontEnd)
 * 
 * Version 1.0
 * 
 * @author Ayush Srivastava(3201526)
 * 
 * @created-time May 5, 11:50
 * 
 * An angular web project to provide the authenticated users the functionality to view, filter, search, check serviceAbility of different products available in the database.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

ngOnInit(): void {}

login(){ //To navigate to Login module
  this.router.navigate(["login"]);

}
register(){ //To navigate to Registration module
  this.router.navigate(["registration"]);

}
goToDisplay(){ //To move the user to the product listing page.
  this.router.navigate(["display"]);
}
}

