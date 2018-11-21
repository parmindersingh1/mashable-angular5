import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log("authguard", localStorage.getItem('currentUser'));
        let data = localStorage.getItem('currentUser');         
        if (data !== null) {
            // logged in so return true
            console.log("logged in", data);
            return true;
        }
        // error when verify so redirect to login page with the return url
        this._router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}