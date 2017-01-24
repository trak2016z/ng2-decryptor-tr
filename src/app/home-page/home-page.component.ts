import { Component } from '@angular/core';
const padlock = require('../../assets/locked.svg');

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
  public padlockSvg: string = padlock;
}
