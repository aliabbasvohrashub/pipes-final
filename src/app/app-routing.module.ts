import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes =
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then(m => m.PipeModule) }
  ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
