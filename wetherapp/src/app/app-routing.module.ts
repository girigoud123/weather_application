import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { LandingScreenComponentComponent } from './landing-screen-component/landing-screen-component.component';

const routes: Routes = [
  {
    path: 'landingScreen',
    component: LandingScreenComponentComponent,
  },
  {
    path: 'forecast/:zipcode',
    component: ForecastComponent,
  },
  {
    path: '',
    redirectTo: 'landingScreen',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
