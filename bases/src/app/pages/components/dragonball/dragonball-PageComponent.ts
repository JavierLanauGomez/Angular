

import { Component } from '@angular/core';
import { signal } from '@angular/core';


interface Character {

  id: number;
  name: string;
  powerLevel: number;

}


@Component({
  standalone: true,
  templateUrl: './dragonball-PageComponent.html',

})
export class dragonballPageComponent {

  characters = signal (<Character[]>([

    { id: 1,name: 'Goku',powerLevel: 9001},
    { id: 2,name: 'Vegeta',powerLevel: 8500},
    { id: 3,name: 'Yamcha',powerLevel: 7000}



  ]));



}

