import { LoggerService } from './../../../_services/logger.service';
import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  model: any = {};
  constructor(private _auth: AuthService, 
              private _router: Router,
              private logger: LoggerService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  send() {
    console.log(this.model);
    this.logger.success("Forgot Password");
    this._router.navigate(['/auth', 'login']);
  }

}
