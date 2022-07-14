import { CommentEntry, getComments } from "./comments";

export type FilmCharacter = {
    name: string;
    id: string;
    gender?: string;
    hair_color?: string;
    eye_color?: string;
    age?: string;
}
export type Film = {
    id: string;
    title: string;
    description: string;
    original_title: string;
    image: string;
    movie_banner: string;
    people: string[];
    characters?: FilmCharacter[];
    comments?: CommentEntry[]

}

export async function getFilms(title?: string | null) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const films: Film[] = await response.json();
    return films.filter((film) =>
        title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
    );       
}

export async function getFilmbyID(filmId:string) {
    const response = await fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`);
    const film: Film = await response.json();

    const comments = await getComments(filmId);

    const characters = await Promise.all(
        film.people
        .filter((url) => url !== 'https://ghibliapi.herokuapp.com/people/')
        .map((url) => fetch(url)
        .then((response) => response.json()))
    );

    return {...film,  comments, characters};;   
}

export async function getFilmCharacters(characterId:string): Promise<FilmCharacter> {
    const response = await fetch(`https://ghibliapi.herokuapp.com/people/${characterId}`);
    if (!response.ok) {
        throw response;
        // const character: FilmCharacter = await response.json();
        // return character;
    }
    return response.json();
   
}

