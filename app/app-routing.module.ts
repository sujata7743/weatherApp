import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { HelpComponent } from './pages/help/help.component';



const routes: Routes = [
  {path:'',component:ForecastComponent},
  {path:'app-about',component:AboutComponent},
  {path:'app-help',component:HelpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
