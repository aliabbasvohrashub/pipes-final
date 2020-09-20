import { NgModule } from "@angular/core";
import { CascadeDropdownsComponent } from "./cascade-dropdowns.component";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: CascadeDropdownsComponent }
    ]
  }
];

@NgModule({
  declarations: [CascadeDropdownsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)]
})

export class CascadeDropdownsModule { }