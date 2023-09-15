import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewSpecificProductComponent } from './view-specific-product/view-specific-product.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'display', component:DisplayComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'view-product/:productCode', component:ViewSpecificProductComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
