
import { Routes } from '@angular/router';
import { CounterpageComponent } from './pages/counter/counter.page.components';
import { HeroPageComponent } from './pages/hero/hero-page.components';
import { dragonballPageComponent } from './pages/components/dragonball/dragonball-PageComponent';

export const routes: Routes = [
{
path:'',
component: CounterpageComponent

},
 {
    path: 'hero',
    component: HeroPageComponent
  },
  {
  path: 'dragonball',
  component: dragonballPageComponent
},
  {
    path: '**',
    redirectTo: ''
  }


]



