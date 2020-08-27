export interface FavouriteItem {
    id: string;
    name: string;
    description: string,
    owner: {
        login: string
    },
    contributors_url: string,
    favourite: boolean
}
