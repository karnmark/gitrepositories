import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartialsModule } from './views/partials/partials.module';
import { PagesModule } from './views/pages/pages.module';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { FavouriteReducer } from './store/reducers/favourite.reducer';
import { FindValueOperator } from 'rxjs/internal/operators/find';
// import { PipeModule } from './views/pipes/pipe/pipe.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule,
    PagesModule,
    HttpClientModule,
    StoreModule.forRoot({ favourite: FavouriteReducer }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
