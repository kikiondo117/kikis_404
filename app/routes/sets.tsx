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
    </main>
  );
}
