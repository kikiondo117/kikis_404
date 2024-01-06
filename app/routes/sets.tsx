import { Link, Links } from "@remix-run/react";
import { Menu } from "~/components/common/Menu/Menu";
import { SocialMedia } from "~/components/common/SocialMedia/SocialMedia";

export default function Sets() {
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
        <Link
          target="_blank"
          to="https://www.youtube.com/watch?v=PnzIhV8AMDU&t=209s"
          className="md:w-64 w-60 h-60"
        >
          <img src="/imgs/kikis_2_black.png" alt="" />
        </Link>
        <Link
          target="_blank"
          to="https://www.youtube.com/watch?v=qrIpKGUNcBM&t=1609s"
          className="md:w-64 w-60 h-60"
        >
          <img
            className="w-full h-full"
            src="/imgs/kikis_social_media.png"
            alt=""
          />
        </Link>
        <Link to="/" className="md:w-64 w-60 h-60">
          <img className="w-full h-full" src="/imgs/sets/ghost.png" alt="" />
        </Link>
        <Link to="/" className="md:w-64 w-60 h-60">
          <img
            className="w-full h-full"
            src="/imgs/sets/ghost_white.png"
            alt=""
          />
        </Link>
      </section>
    </main>
  );
}
