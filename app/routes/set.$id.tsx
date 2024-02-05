import {
  LoaderFunction,
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { FaSpotify } from "react-icons/fa/index.js";

import { Menu } from "~/components/common/Menu/Menu";
import { SocialMedia } from "~/components/common/SocialMedia/SocialMedia";

import { sets_data } from "~/data/sets";

export const meta: MetaFunction = () => {
  return [
    { title: "kikis 404 Set" },
    {
      property: "og:title",
      content: "DJ KIKIS 404 - DJ Set",
    },
    {
      name: "description",
      content: `Explora el set del mes.`,
    },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
  ];
};

type TSet = {
  date: string;
  id: string;
  img: string;
  link: string;
  tracks: string[];
};

export default function Set() {
  const data = useLoaderData<TSet>();

  return (
    <main
      className="container mt-20  mx-auto text-white"
      style={{ lineHeight: "1.4" }}
    >
      <header className="flex flex-col gap-2 mt-4">
        <Link to="/">
          <h1 className="text-3xl text-center md:text-5xl font-bold uppercase">
            kikis 404
          </h1>
        </Link>
        <Menu />
        <SocialMedia />
      </header>

      <div className="flex flex-col gap-8 mt-6 md:mt-12">
        {/* ANCHOR DEMO SET DATA 27 / 01 / 2024*/}
        <section>
          <p className="text-center p-4 text-xl md:text-2xl font-barlow-medium">
            Session - {data.date}
          </p>
        </section>

        {/* ANCHOR DEMO SET MONTH AND TRACKS*/}
        <section className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
          <div className="order-2">
            <p className="text-xl text-center mb-2">Tracks list:</p>

            <ul>
              {data.tracks.map((track) => (
                <li key={track} className="font-barlow-extralight text-center">
                  {track}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <iframe
              className=" w-full h-full md:w-[560px] md:h-[315px]"
              src="https://www.youtube.com/embed/cc-w0c13tGI?si=RRwR_j6nDGJEoX3C"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* ANCHOR DEMO */}
        <section className="flex flex-col md:flex-row md:gap-8 items-center justify-center">
          <div className="order-2">
            <p className="text-2xl md:text-4xl text-center mb-2">
              Spotify Play List
            </p>

            <div className="flex justify-center">
              <a
                href="https://open.spotify.com/playlist/1nQPEU60lopIZbgcgmfHLQ?si=1b3b8fba352f438d"
                target="_blank"
              >
                <FaSpotify className="w-28 h-28 my-8 text-[#1DB954]" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export const loader: LoaderFunction = (args: LoaderFunctionArgs) => {
  const id = args.params.id;
  const set = sets_data.find((set) => set.id === id);

  if (!set) {
    return redirect("/");
  }

  return json(set);
};
