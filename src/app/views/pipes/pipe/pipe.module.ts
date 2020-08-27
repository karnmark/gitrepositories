import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritePipe } from './favourite.pipe';



@NgModule({
  declarations: [FavouritePipe],
  imports: [
    CommonModule
  ],
  providers:[FavouritePipe]
})
export class PipeModule { }
