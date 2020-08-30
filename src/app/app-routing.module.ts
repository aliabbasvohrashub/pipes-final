import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PipesComponent } from './pipes/pipes.component';



const routes: Routes =
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pipes', component: PipesComponent }
  ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
