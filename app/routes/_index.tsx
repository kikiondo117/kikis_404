import { Link } from "@remix-run/react";
import { SocialMedia } from "~/components/common/SocialMedia/SocialMedia";

export default function Index() {
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

      <ul className="flex justify-center gap-2 mt-4 text-base font-barlow-extralight uppercase">
        <li>
          <Link to="/store">Mercancia</Link>
        </li>
        <li>|</li>

        <li>
          <Link to="/sets">DJ Sets</Link>
        </li>
        <li>|</li>
        <li>
          {" "}
          <Link to="/store">Contacto</Link>
        </li>
      </ul>

      <div className="mx-auto w-[300px] h-[50vh] max-w-xl mt-4 md:mt-8 relative ">
        <img
          className="w-full h-full object-cover "
          src="/imgs/kikis_logo.JPEG"
          alt="kikis 404"
        />
      </div>

      <SocialMedia />
    </main>
  );
}
