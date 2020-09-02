import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading, PreloadingStrategy } from '@angular/router'
import { CustomPreloadingService } from './custom-preloading.service';

const routes: Routes =
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      data: { 'preload': true }
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {
      path: 'pipes',
      loadChildren: () => import('./pipes/pipes.module').then(m => m.PipeModule)
    }
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,
      // { preloadingStrategy: NoPreloading }
      // { preloadingStrategy: PreloadAllModules }
      { preloadingStrategy: CustomPreloadingService }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
