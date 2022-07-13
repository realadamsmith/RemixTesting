import { LoaderFunction,  } from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import { getFilmbyID, Film } from "~/api/films";
import invariant from "tiny-invariant";
import FilmBanner from "~/components/FilmBanner";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.filmId, 'expected params.filmId');
    const film = await getFilmbyID(params.filmId);
    console.log('fetching film', film.title);
    return film;
}

export default function Film() {
    const film = useLoaderData<Film>();
    return <div>
        <FilmBanner film={film}></FilmBanner>
        <div className="p-10">            
            <p className="">{film.description}</p>
        </div>
    </div> ;
}