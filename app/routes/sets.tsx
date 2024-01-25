import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useEffect } from "react";
import { Menu } from "~/components/common/Menu/Menu";
import { SetCard } from "~/components/common/Set/SetCard";
import { SocialMedia } from "~/components/common/SocialMedia/SocialMedia";

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
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
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
    <main
      className="container mt-20  mx-auto text-white"
      style={{ lineHeight: "1.4" }}
    >
      <Link to="/">
        <h1 className="text-3xl text-center md:text-5xl font-bold uppercase">
          kikis 404
        </h1>
      </Link>

      <header className="mt-4">
        <Menu />
      </header>

      <SocialMedia />

      <section className="flex flex-col gap-4 items-center md:gap-0 md:flex-row justify-center mt-12 flex-wrap">
        <SetCard
          url="https://www.youtube.com/watch?v=PnzIhV8AMDU&t=0s"
          img="/imgs/kikis_2_black.png"
        />
        <SetCard
          url="https://www.youtube.com/watch?v=qrIpKGUNcBM&t=0s"
          img="/imgs/kikis_social_media.png"
        />
        <SetCard
          url="https://www.youtube.com/watch?v=PnzIhV8AMDU&t=0s"
          img="/imgs/sets/ghost.png"
        />
        <SetCard
          url="https://www.youtube.com/watch?v=cc-w0c13tGI&t=0s"
          img="/imgs/sets/ghost_white.png"
        />
      </section>

      <section className="mt-8 h-screen flex flex-col items-center justify-center">
        <h2 className="text-center text-4xl md:text-5xl font-barlow-thin">
          LIVE SESSION
        </h2>

        <div>
          <iframe
            className=" w-full h-full md:w-[560px] md:h-[315px]"
            src="https://www.youtube.com/embed/cc-w0c13tGI?si=RRwR_j6nDGJEoX3C"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <p className="mt-4 md:mt-8 text-center text-xl md:text-4xl font-barlow-medium">
          Proximo Set en vivo - 27 / 01 / 2024
        </p>
      </section>
    </main>
  );
}
