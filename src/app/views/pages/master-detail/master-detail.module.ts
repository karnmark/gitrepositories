import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MasterDetailComponent } from './master-detail.component';
import { PartialsModule } from '../../partials/partials.module';
import { PipeModule } from '../../pipes/pipe/pipe.module';
import { FavouritePipe } from '../../pipes/pipe/favourite.pipe';
const routes: Routes = [
  {
    path: '',
    component: MasterDetailComponent,
    children: [
      {
        path: '',
        redirectTo: 'master-details',
        pathMatch: 'full'
      },
      {
        path: 'master-details',
        component: MasterDetailComponent
      },
    ]
  }
]

@NgModule({
  declarations: [FavouritePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PartialsModule,
    PipeModule
  ]
})
export class MasterDetailModule { }
