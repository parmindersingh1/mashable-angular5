import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  styles:[`
    .nav-tabs {
      background-color: #fff;
    }
  `]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
