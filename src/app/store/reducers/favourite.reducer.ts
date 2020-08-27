import { FavouriteItem } from '../models/favourite-item.model';
import { FavouriteAction, FavouriteActionTypes } from '../actions/favourite.actions';

const initialState: FavouriteItem[] = [];

export function FavouriteReducer(
    state: any[] = initialState,
    action: FavouriteAction) {
    switch (action.type) {
        case FavouriteActionTypes.ADD_ITEM:
            if (state && state.length > 0) {
                return Object.assign([], (state.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            favourite: true
                        };
                    } else {
                        return item;
                    }
                })));
            }
            return [...state];
        case FavouriteActionTypes.REMOVE_ITEM:
            if (state && state.length > 0) {
                return Object.assign([], (state.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            favourite: false
                        };
                    } else {
                        return item;
                    }
                })));
            }
            return [...state];
        case FavouriteActionTypes.LOAD_ITEM:
            return state = action.payload;
        default:
            return state;
    }
}
