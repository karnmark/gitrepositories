import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ValueService } from 'src/app/services/value.service';
import { tap,map, filter, scan } from 'rxjs/operators';
import { Router, NavigationExtras } from "@angular/router";
import { AppState } from '../../../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { FavouriteItem } from 'src/app/store/models/favourite-item.model';
import { Observable } from 'rxjs';
import { AddFavouriteAction, RemoveFavouriteAction, LoadRepositoriesAction } from 'src/app/store/actions/favourite.actions';
import { FavouritePipe } from '../../pipes/pipe/favourite.pipe';


@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MasterDetailComponent implements OnInit {
  publicRepositories;

  title = 'favourite-list';
  favouriteItems$: Observable<FavouriteItem[]>;

  constructor(private _valueService: ValueService, private route: Router,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.getGitRepositores();
    this.favouriteItems$ = this.store.select(store => store.favourite);

  }

  /* Fetching the public git repositories */
  getGitRepositores(){
    this._valueService.getGitRepositores().pipe(
      tap(repositories => {
        repositories.map(repository => repository.favourite = false);
      }),
      tap(repositories => {
        // this.publicRepositories = repositories;
        let publicRepositories: FavouriteItem[] = repositories;
        this.store.dispatch(new LoadRepositoriesAction(publicRepositories));
        console.log(this.favouriteItems$);
      }),
    ).subscribe();
  }

  /* To see the particular repository */
  viewRepository(repo){

    let repoInfo = [{
      'id': repo.id,
      'contributors_url' : repo.contributors_url,
      'description' : repo.description,
      'name': repo.name,
      'owner': repo.owner.login,
      'url': repo.url
    }]
    localStorage.setItem('repoInfo', JSON.stringify(repoInfo))
    // this._valueService.setData(repoInfo);
    this.route.navigate([`repository/${repo.name}`])

  }

  /**
	 * @description Sets the height based on the window screen
	 *
	 *  */
  getDivHeight(): string {
      let mapHeight = window.innerHeight * 0.65;
      if (window.innerWidth < 768) {
        return 'auto';
      } else {
        return mapHeight + 'px';
      }
  }

  /**
   * @description Adds the repository to the favourite list
   *
   *  */
  addToFavourites(theRepo:FavouriteItem){
    this.store.dispatch(new AddFavouriteAction(theRepo));
  }

  removeItem(theRepo: FavouriteItem){
    this.store.dispatch(new RemoveFavouriteAction(theRepo));
  }
}
