import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendApiService } from './shared/backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private backEndApi:BackendApiService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if(this.backEndApi.isUserLoggedIn()){
        return true;
      }
      else{
        //To navigate back to home if user is not authorized.
        this.router.navigate(['/home']);
        return false;
      }
  }
  
}
