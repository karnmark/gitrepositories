import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const routes = [];


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [HeaderComponent]
})
export class PartialsModule { }
