import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{
    constructor(private auth0:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!this.auth0.isAuthenticated() && req.method !== 'GET'){ //sneaky way to only add for destructive routes
            return Observable.throw('User is not authenticated!');
        }
        else{
            if(!req.headers.has('Authorization')){
                req = req.clone({
                    setHeaders:{
                        Authorization: `BEARER ${localStorage.getItem('access_token')}`
                    }
                })
            }
        }
        return next.handle(req);
    }
    
}