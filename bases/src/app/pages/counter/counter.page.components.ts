

import { Component } from '@angular/core';

@Component({
  selector: 'app-counterpage',

  templateUrl: './counter.page.componets.html',
  styleUrls: ['./counter.page.components.css']

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
