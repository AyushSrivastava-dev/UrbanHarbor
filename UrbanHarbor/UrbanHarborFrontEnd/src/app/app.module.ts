import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrandfilterpipePipe } from './pipe/brandfilterpipe.pipe';
import { PriceFilterPipe } from './pipe/price-filter.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { HttpAuthorizationInterceptorService } from './shared/http-authorization-interceptor.service';
import { ViewSpecificProductComponent } from './view-specific-product/view-specific-product.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ViewSpecificProductComponent,
    BrandfilterpipePipe,
    PriceFilterPipe,
    DisplayComponent,
    NavbarComponent
    
    
  ],
  imports: [
    BrowserModule,  AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule, NgbModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:HttpAuthorizationInterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
