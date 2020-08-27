import { FavouriteItem } from '../models/favourite-item.model';
import { FavouriteAction, FavouriteActionTypes } from '../actions/favourite.actions';
import { element } from 'protractor';

const initialState: FavouriteItem[] = [];

export function FavouriteReducer(
    state:any[] = initialState,
    action: FavouriteAction) {
    console.log("favourite action", action,  FavouriteActionTypes, state);

    switch (action.type) {
        case FavouriteActionTypes.ADD_ITEM:
            state.forEach(element=>{
                if(element.id == action.payload.id){
                    element.favourite = true;
                }
            })
            return [...state];
        case FavouriteActionTypes.REMOVE_ITEM:
            state.forEach(element => {
                if (element.id == action.payload.id) {
                    element.favourite = false;
                }
            })
            return [...state];
        case FavouriteActionTypes.LOAD_ITEM:
            // destinationArray.push(...sourceArray);
            return state = action.payload;
        default:
            return state;
    }
}
