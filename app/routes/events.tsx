import { Link } from "@remix-run/react";

import { Menu } from "~/components/common/Menu/Menu";
import { SocialMedia } from "~/components/common/SocialMedia/SocialMedia";

export default function Events() {
  return (
    <main
      className="container mt-20  mx-auto text-white"
      style={{ lineHeight: "1.4" }}
    >
      <header className="flex flex-col gap-2 mt-4">
        <Link to="/">
          <h1 className="text-3xl text-center md:text-5xl font-bold uppercase">
            LIVE SESSION
          </h1>
        </Link>
        <Menu />
        <SocialMedia />
      </header>

      {/* ANCHOR DEMO SET MONTH */}
      <section className="flex flex-col gap-4 items-center justify-center mt-12">
        <div className="border border-solid rounded-md border-white p-4">
          <h2 className="text-3xl font-barlow-mediu text-fuchsia-400">
            Date: Marzo - 29
          </h2>
          <p className="text-xl font-barlow-thin text-center">
            Lugar Por confirmar
          </p>
        </div>

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
      </section>
    </main>
  );
}
