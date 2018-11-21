import { AuthService } from './../pages/auth/_services/auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanActivateChild } from "@angular/router";

import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private _router: Router, private auth: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
       
        // let data = localStorage.getItem('currentUser');         
        if (this.auth.isAuthenticated()) {
            // logged in so return true
            console.log("logged in", this.auth.getUser());
            return true;
        }
        // error when verify so redirect to login page with the return url
        this._router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
       
        // let data = localStorage.getItem('currentUser');         
        if (this.auth.isAuthenticated()) {
            // logged in so return true
            console.log("logged in", this.auth.getUser());
            return true;
        }
        // error when verify so redirect to login page with the return url
        this._router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}