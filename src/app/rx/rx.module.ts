import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxComponent } from './rx.component'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: RxComponent
      }
    ]
  }
]

@NgModule({
  declarations: [RxComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RxModule { }
