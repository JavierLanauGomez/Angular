
import { Routes } from '@angular/router';
import { CounterpageComponent } from './pages/counter/counter.page.components';




export const routes: Routes = [
{
path:'',
component: CounterpageComponent

},
 {
    path: '/hero',
    component: HeroPageComponent
  }

];



