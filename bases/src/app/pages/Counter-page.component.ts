

import { Component } from '@angular/core';

@Component({
  selector: 'app-counterpage',
  template: `
    <h1>Counter:{{counter}}</h1>
    <p>Counter page</p>
    <button (click)="increaseby(1)">+1</button>
    <button (click)="increaseby(5)">+5</button>
    <button (click)="increaseby(10)">+10</button>
    <button (click)="resetcounter(100)">+10</button>
  `
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
