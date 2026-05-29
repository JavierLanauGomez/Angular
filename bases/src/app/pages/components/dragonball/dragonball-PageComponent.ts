

import { Component, signal } from '@angular/core';


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

  newName = signal('');
  newPowerLevel = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', powerLevel: 9001 },
    { id: 2, name: 'Vegeta', powerLevel: 8500 },
    { id: 3, name: 'Yamcha', powerLevel: 7000 },
  ]);

  addCharacter() {
    if (!this.newName().trim()) return;
    this.characters.update(chars => [
      ...chars,
      { id: chars.length + 1, name: this.newName().trim(), powerLevel: this.newPowerLevel() }
    ]);
    this.newName.set('');
    this.newPowerLevel.set(0);
  }

}

