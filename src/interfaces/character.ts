export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
    type?: string;
    location: {
        name:string
    }
    episode: []
}