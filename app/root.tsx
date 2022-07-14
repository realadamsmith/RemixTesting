// import { LiveReload, Outlet } from "@remix-run/react";
// import { LinksFunction } from "@remix-run/node";
// import styles from "./tailwind.css";

// export const links: LinksFunction = () => {
//   return [{ rel:'stylesheet', href: styles }];
// };

// export default function App() {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <title>Remix: So great, it's funny!</title>
//       </head>
//       <body>
//       <Outlet />
//         <LiveReload />
//       </body>
//     </html>
//   );
// }

import {
  Links,
  
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/node';
import styles from './tailwind.css';


export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: 'Studio Ghibli', description: 'A description' };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: any) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        {error.message}
        <Scripts />
      </body>
    </html>
  );
}