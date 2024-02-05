import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { Menu } from "~/components/common/Menu/Menu";
import { SetCard } from "~/components/common/Set/SetCard";
import { SocialMedia } from "~/components/common/SocialMedia/SocialMedia";
import { sets_data } from "~/data/sets";

export const meta: MetaFunction = () => {
  return [
    { title: "kikis 404 Sets" },
    {
      property: "og:title",
      content: "DJ KIKIS 404 - DJ Sets",
    },
    {
      name: "description",
      content: `Explora la vibrante selección de Melodic Techno de DJ [Tu Nombre] en esta exclusiva colección de sets grabados.
       Sumérgete en ritmos cautivadores y melodías únicas directamente desde Colima. 
       Escucha ahora y experimenta la magia de la música electrónica.`,
    },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
  ];
};

export default function Sets() {
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

      {/* ANCHOR SET CARDS YOUTUBE */}
      <section className="flex flex-col gap-4 items-center md:gap-0 md:flex-row justify-center mt-12 flex-wrap">
        {sets_data.map((set) => {
          return (
            <Link key={set.id} to={`/set/${set.id}`}>
              <SetCard key={set.id} img={set.img} id={set.id} date={set.date} />
            </Link>
          );
        })}
      </section>

      {/* ANCHOR DEMO SET MONTH */}
      <section className=" h-screen flex flex-col gap-4 items-center justify-center">
        <h2 className="text-center text-4xl md:text-5xl font-barlow-thin">
          LIVE SESSION
        </h2>

        <div>
          <iframe
            className=" w-full h-full md:w-[560px] md:h-[315px]"
            src="https://www.youtube.com/embed/cc-w0c13tGI?si=RRwR_j6nDGJEoX3C"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {/* ANCHOR DEMO SET DATA 27 / 01 / 2024*/}
        <p className="p-4 mb-12 text-center text-xl md:text-4xl font-barlow-medium">
          Proximo Set en vivo - Aun definiendo día del mes.
        </p>
      </section>
    </main>
  );
}
