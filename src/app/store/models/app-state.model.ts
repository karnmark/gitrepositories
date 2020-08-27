import { FavouriteItem } from './favourite-item.model';

export interface AppState {
    readonly favourite: FavouriteItem[];
}
