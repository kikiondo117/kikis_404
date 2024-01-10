import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Menu } from "~/components/common/Menu/Menu";

export const meta: MetaFunction = () => {
  return [
    { title: "kikis 404 Colima Mexico" },
    {
      property: "og:title",
      content:
        "DJ KIKIS 404 - Revolucionando la Escena Melodic Techno en Colima",
    },
    {
      name: "description",
      content:
        "Conoce a kikis 404, tu DJ de melodic techno en Colima. Explora mezclas vibrantes y sonidos innovadores para tus fiestas y eventos. ¡Descubre más aquí!",
    },
  ];
};

export default function Contact() {
  return (
    <main
      className="container mt-20  mx-auto text-white pb-8"
      style={{ lineHeight: "1.4" }}
    >
      <div className="mx-auto w-[300px] max-w-xl mt-4 md:mt-8 relative md:w-[80vw]">
        <Link to="/">
          <video autoPlay loop muted playsInline>
            <source src="/videos/kikis404black.mp4" />
          </video>
        </Link>
      </div>

      <Menu />

      <section className="mt-8 px-8">
        <p className="font-barlow-medium text-center text-3xl md:text-4xl">
          ¿Te gustaria aganedar para un evento?
        </p>

        <p className="mx-auto text-center max-w-xl mt-8">
          De momento toda agenda es por medio de whatsapp o por correo
          electronico:
        </p>
        <p className="text-center mt-4 text-2xl text-cyan-400">
          <strong>djkikis404@gmail.com</strong>
        </p>

        <p className="text-center mt-4 font-barlow-thin">
          Para el estado de Colima tenemos promociones especiales.
        </p>
      </section>
    </main>
  );
}
