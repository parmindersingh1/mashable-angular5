import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.model.remember = true;
  }

  signin() {
    console.log("sign in", this.model);
  }

}
