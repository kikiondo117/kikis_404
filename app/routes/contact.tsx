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
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
  ];
};

export default function Contact() {
  return (
    <main
      className="container mt-20  mx-auto text-white pb-8"
      style={{ lineHeight: "1.4" }}
    >
      <div className="mx-auto w-[300px]  mt-4 md:mt-8 relative md:w-[50vw]">
        <Link to="/">
          <video autoPlay loop muted playsInline>
            <source src="/videos/kikis404black.mp4" />
          </video>
        </Link>
      </div>

      <Menu />

      <section className="mt-8 px-8 h-screen flex flex-col justify-center">
        <h2 className="font-barlow-medium text-center text-3xl md:text-4xl">
          ¿Te gustaria aganedar para un evento?
        </h2>

        <p className="mx-auto text-center max-w-xl mt-8 font-barlow-regular">
          Bienvenido a la experiencia sonora definitiva en Colima con KIKIS 404,
          tu experto en Melodic Techno. ¿Buscas elevar tu evento con música
          vibrante y una atmósfera inolvidable? Estás en el lugar correcto.
        </p>

        <p className="text-center mt-4 text-xl md:text-2xl ">
          Correo de Contacto:
        </p>

        <p className=" text-center  text-xl md:text-2xl text-cyan-400">
          djkikis404@gmail.com
        </p>
      </section>
    </main>
  );
}
