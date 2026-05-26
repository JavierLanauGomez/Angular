

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-heropage',
  templateUrl: './hero-page.components.html',
  styleUrls: ['./hero-page.components.css']
})


export class HeroPageComponent {

  public name = signal ('Ironman')
  public age = signal (45)
  public changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(25);
  }
  public getHeroDescription(): string {
    return `${this.name()} - ${this.age()} years old `;

   public changeHeroDescription(): void {
    this.name.update(name => name.toUpperCase());
    this.age.update(age => age + 1);
}
  public resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);







  }







}






