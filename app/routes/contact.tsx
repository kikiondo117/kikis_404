import { Link } from "@remix-run/react";
import { Menu } from "~/components/common/Menu/Menu";

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
          electronico.
        </p>
      </section>
    </main>
  );
}
