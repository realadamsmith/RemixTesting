import { Link } from "@remix-run/react";

export default function IndexRoute() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl mb-2 ml-10">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
            className="text-3xl mb-2  ml-20"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
            className="text-3xl mb-2 ml-20"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-3xl mb-2  ml-20"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
        <br></br>
        <li>
          <Link
            to={"/films"}
            className="text-3xl mb-2  ml-20 focus:outline-none focus:ring focus:ring-blue-300 hover:bg-blue-600 active:bg-blue-300"
            target="_blank"
            rel="noreferrer"
          >
            {/* href="/films" */}
            Films
          </Link>
        </li>
        <li>
          <Link
            to={"/jokes"}
            className="text-3xl mb-2  ml-20 focus:outline-none focus:ring focus:ring-blue-300 hover:bg-violet-600 active:bg-violet-300"
            target="_blank"
            rel="noreferrer"
          >
            {/* href="/films" */}
            Jokes
          </Link>
        </li>
        
      </ul>
    </div>
  );
}
