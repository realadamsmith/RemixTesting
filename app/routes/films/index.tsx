import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { Film, getFilms } from "~/api/films";

// Server side
export const loader: LoaderFunction = async ({request}) => {
    const url = new URL(request.url);
    const title = url.searchParams.get('title');
    return getFilms(title)
}

// Client side
export default function FilmsIndex() {
    const films = useLoaderData<Film[]>();
    return (
        <div>Films
            <Form>
                <label> Search{''}
                    <input type="text" name="title" placeholder="Type a title..."/>
                </label>
                <button type="submit">Search</button>

            </Form>
            <ul>
                {films.map(film => (
                    <Link to={film.id} key={film.id} prefetch="intent" >
                        <div>{film.title}</div>
                        <img src={film.image} alt={film.title} />
                        {/* <a href={`/films/${film.id}`}>{film.title}</a> */}
                    </Link>
                ))}
            </ul>
        </div>
    );
        
}


// export const links: LinksFunction = () => {
//     return { title: "The metaverse", description: "things" };
// };

// export default function FilmsRoute() {
//     return (
//       <div>
//         <p>Films</p>
//         <p>
        
//         </p>
//       </div>
//     );
//   }