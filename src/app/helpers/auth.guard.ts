import {Injectable} from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginserviceService} from "../services/loginservice.service";
@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
  constructor(
    private router:Router,
    private loginService:LoginserviceService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLogged = this.loginService.isLogged();
    if(isLogged){
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }
}
