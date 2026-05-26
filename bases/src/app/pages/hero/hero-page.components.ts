import { Component, signal } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-heropage',
  templateUrl: './hero-page.components.html',
  styleUrls: ['./hero-page.components.css']
})
export class HeroPageComponent {

  public name = signal('Ironman');
  public age = signal(45);

  public changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(25);
  }

  public changeAge(): void {
    this.age.update(age => age + 1);
  }

  public getHeroDescription(): string {
    return `${this.name()} - ${this.age()} years old`;
  }

  public changeHeroDescription(): void {
    this.name.update(name => name.toUpperCase());
    this.age.update(age => age + 1);
  }

  public resetForm(): void {
    this.name.set('');
    this.age.set(0);
  }

}






