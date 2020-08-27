import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favourite'
})
export class FavouritePipe implements PipeTransform {

  transform(value: any, favourite: boolean): any {
    console.log(value, favourite);
      if(favourite == true){
        return value;
      }
  }

}
