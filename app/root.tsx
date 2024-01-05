import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import globalStyles from "./global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "stylesheet",
    href: globalStyles,
  },
];

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "KIKIS 404",
  },
  {
    property: "og:title",
    content: "KIKIS 404",
  },
  {
    property: "og:description",
    content: "Mercancia, agenda , DJ Sets y más..",
  },
  {
    property: "og:image",
    content: "https://kikis404.com/imgs/kikis_logo.JPEG",
  },
  {
    property: "og:url",
    content: "https://www.kikis404.com",
  },
  {
    name: "description",
    content: "Informacion de kikis 404, mercancia y agenda",
  },
  {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className="bg-black"
        style={{ fontFamily: "Barlow, sans-serif", lineHeight: "1.4" }}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
