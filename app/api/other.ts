export type Tiktok = {
    id: string;
}



export async function getTiktoks(id?: string | null) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const films: Tiktok[] = await response.json();
    // console.log(films)
    // return films
    
    // return films.filter((film) =>
    //     id ? film.id.toLowerCase().includes(id.toLowerCase()) : true
    // );       
}