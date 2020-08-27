import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../partials/partials.module';
import { PagesRoutingModule } from './pages-routing.module';
import { RepositoryComponent } from './repository/repository.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { FavouritePipe } from '../pipes/pipe/favourite.pipe';
// import { PipeModule } from '../pipes/pipe/pipe.module';



@NgModule({
  declarations: [MasterDetailComponent, RepositoryComponent,FavouritePipe],
  imports: [
    CommonModule,
    PartialsModule,
    PagesRoutingModule,

  ]
})
export class PagesModule { }
