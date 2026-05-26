

import { Component } from '@angular/core';

@Component({
  selector: 'app-counterpage',

  templateUrl: './Counter-page.componets.html',
  styleUrls: ['./Counter-page.components.css']

})
export class CounterpageComponent {

  counter = 10;

  increaseby(value: number = 1) {
    this.counter += value;
  }

  resetcounter(value: number = 100) {
    this.counter = value;
  }
}
