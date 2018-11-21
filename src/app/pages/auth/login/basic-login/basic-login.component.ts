import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  
  constructor( private _auth: AuthService, 
               private _router: Router, 
               private _route: ActivatedRoute,) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.model.remember = true;
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  signin() {
    console.log("sign in", this.model);
    this._auth.onLogin(this.model);
    this._router.navigate([this.returnUrl]);
  }

}
