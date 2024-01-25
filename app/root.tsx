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
import { BackButton } from "./components/common/BackButton/Backbutton";

import { useEffect } from "react";

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
    property: "og:type",
    content: "article",
  },
  {
    property: "fb:app_id",
    content: "kikis_404",
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
    content: "https://kikis404.com/imgs/kikis_social_media.png",
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
  // * Segment Configuration
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.segment.com/analytics.js/v1/8FRB6yEFpo8At9HTJBxwPod6WNFDD0EX/analytics.min.js";
    script.async = true;
    script.onload = () => {
      if (window.analytics) {
        window.analytics.load("8FRB6yEFpo8At9HTJBxwPod6WNFDD0EX");
        window.analytics.page();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
      //  @ts-ignore
      window.voiceflow.chat.load({
        verify: { projectID: "65b2d0e889b0787e9e090572" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className="bg-black text-white"
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

export function ErrorBoundary() {
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body
        style={{ fontFamily: "Barlow, sans-serif", lineHeight: "1.4" }}
        className=" bg-black text-white"
      >
        <main className="container mx-auto">
          <h1 className="mt-20  text-center text-3xl md:text-5xl">404</h1>
          <p className="text-center mt-4 font-barlow-thin px-4">
            Parece que no se encuentra disponible esta pagina de momento.
            <br />
            Esperemos que en un futuro la podamos ver, resiste un poco más u.u
          </p>
          <div className="mx-auto w-[300px] h-[50vh] max-w-xl mt-4 md:mt-8 relative ">
            <img
              className="w-full h-full object-cover "
              src="/imgs/kikis_2_black.png"
              alt="kikis 404"
            />
          </div>

          <div className="flex justify-center mt-4">
            <BackButton />
          </div>
        </main>

        <Scripts />
      </body>
    </html>
  );
}
