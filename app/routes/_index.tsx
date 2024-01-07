import { Link } from "@remix-run/react";
import { Menu } from "~/components/common/Menu/Menu";
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

      <header className="mt-4">
        <Menu />
      </header>

      <div className=" mx-auto w-full h-[50vh] max-w-xl mt-2 md:w-[70vw] relative mb-4 ">
        <video autoPlay loop muted playsInline className="w-full h-full">
          <source src="/videos/neonanimation.mp4" />
        </video>
      </div>

      <SocialMedia />
    </main>
  );
}
