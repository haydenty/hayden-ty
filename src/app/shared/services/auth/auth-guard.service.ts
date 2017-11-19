import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth0:AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        if(!this.auth0.isAuthenticated()){
            this.auth0.login();
            return false;
        }
        return true;
    }
}