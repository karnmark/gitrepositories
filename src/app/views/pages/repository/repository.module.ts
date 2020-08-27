import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository.component';
import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: RepositoryComponent
  }
]

@NgModule({
  declarations: [RepositoryComponent],
  imports: [
    CommonModule
  ]
})
export class RepositoryModule { }
