import { fadeInOutTranslate } from './../../shared/elements/animation';
import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [fadeInOutTranslate]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
