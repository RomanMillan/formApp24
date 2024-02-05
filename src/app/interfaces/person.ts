export interface Person{
    name: string;
    favourites: Favourite[]
}

export interface Favourite{
    id: number,
    name: string
}
