// export function headers({
//   loaderHeaders,
//   parentHeaders,
// }: {
//   loaderHeaders: Headers;
//   parentHeaders: Headers;
// }) {
//   console.log(
//     "This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
//   );
//   return {
//     // This is an example of how to set caching headers for a route
//     // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
//     "Cache-Control": "public, max-age=60, s-maxage=60",
//   };
// }

import { Link } from "@remix-run/react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSoundcloud,
  FaFacebook,
} from "react-icons/fa/index.js";

export default function Index() {
  return (
    <main
      className="container mt-20  mx-auto text-white"
      style={{ lineHeight: "1.4" }}
    >
      <h1 className="text-3xl text-center md:text-5xl font-bold uppercase">
        kikis 404
      </h1>

      <ul className="flex justify-center gap-2 mt-4 text-base font-barlow-extralight uppercase">
        <li>Mercancia</li>
        <li>|</li>

        <li>DJ Sets</li>
        <li>|</li>
        <li>Contacto</li>
      </ul>

      <img
        className="mx-auto w-[80vw] h-[50vh] max-w-xl mt-4 md:w-full md:mt-8 "
        src="https://media4.giphy.com/media/Y5pJPmh9IWMKc/giphy.gif?cid=ecf05e47g00wtm9zxrl7xq6kay1otzdus9ljhqioxvfp38q6&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      ></img>

      <div className="flex justify-center items-center gap-4 mt-4">
        <Link target="_blank" to="https://www.tiktok.com/@kikis_404">
          <FaTiktok />
        </Link>
        <Link target="_blank" to="https://www.youtube.com/@kikis404">
          <FaYoutube />
        </Link>
        <Link target="_blank" to="https://www.instagram.com/kikis_404/?hl=en">
          <FaInstagram />
        </Link>
        <Link target="_blank" to="https://soundcloud.com/kikis-30491885">
          <FaSoundcloud />
        </Link>
        <Link
          target="_blank"
          to="https://www.facebook.com/profile.php?id=100091625584896&locale=hi_IN&paipv=0&eav=AfbnfA3-e4qPmS4T2HnoCt09wx51P97MNAB8B2432AwYUMzpeFjLaca7Wabon6rq_LY"
        >
          <FaFacebook />
        </Link>
      </div>
    </main>
  );
}
