import { Action } from '@ngrx/store';
import { FavouriteItem } from '../models/favourite-item.model';


export enum FavouriteActionTypes {
    ADD_ITEM = '[FAVOURITE] Add Item',
    REMOVE_ITEM = '[FAVOURITE] Remove Item',
    LOAD_ITEM = '[FAVOURITE] Load Item'
}

export class AddFavouriteAction implements Action {

    readonly type: FavouriteActionTypes = FavouriteActionTypes.ADD_ITEM;


    constructor(public payload: FavouriteItem) { }
}

export class RemoveFavouriteAction implements Action {

    readonly type: FavouriteActionTypes = FavouriteActionTypes.REMOVE_ITEM;

    constructor(public payload: FavouriteItem) { }
}

export class LoadRepositoriesAction implements Action {

    readonly type: FavouriteActionTypes = FavouriteActionTypes.LOAD_ITEM;

    constructor(public payload:any) { }
}

export type FavouriteAction = AddFavouriteAction | RemoveFavouriteAction | LoadRepositoriesAction;

