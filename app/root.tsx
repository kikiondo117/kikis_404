import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
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
        <script>
  !function() {
    var analytics = window.analytics = window.analytics || [];
    if (!analytics.initialize) {
      if (analytics.invoked) {
        window.console && console.error && console.error("Segment snippet included twice.");
      } else {
        analytics.invoked = !0;
        analytics.methods = [
          "trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", 
          "reset", "group", "track", "ready", "alias", "debug", "page", "screen", "once", 
          "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", 
          "addDestinationMiddleware", "register"
        ];
        analytics.factory = function(e) {
          return function() {
            if (window.analytics.initialized) {
              return window.analytics[e].apply(window.analytics, arguments);
            }
            var i = Array.prototype.slice.call(arguments);
            if (["track", "screen", "alias", "group", "page", "identify"].indexOf(e) > -1) {
              var c = document.querySelector("link[rel='canonical']");
              i.push({
                __t: "bpc",
                c: c && c.getAttribute("href") || void 0,
                p: location.pathname,
                u: location.href,
                s: location.search,
                t: document.title,
                r: document.referrer
              });
            }
            i.unshift(e);
            analytics.push(i);
            return analytics;
          }
        };
        for (var i = 0; i < analytics.methods.length; i++) {
          var key = analytics.methods[i];
          analytics[key] = analytics.factory(key);
        }
        analytics.load = function(key, i) {
          var t = document.createElement("script");
          t.type = "text/javascript";
          t.async = !0;
          t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
          var n = document.getElementsByTagName("script")[0];
          n.parentNode.insertBefore(t, n);
          analytics._loadOptions = i;
        };
        analytics._writeKey = "8FRB6yEFpo8At9HTJBxwPod6WNFDD0EX";
        analytics.SNIPPET_VERSION = "5.2.0";
        analytics.load("8FRB6yEFpo8At9HTJBxwPod6WNFDD0EX");
        analytics.page();
      }
    }
  }();
        </script>
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
