import { Link } from "@remix-run/react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSoundcloud,
  FaFacebook,
  FaMoneyBill,
} from "react-icons/fa/index.js";

export function SocialMedia() {
  return (
    <div className="flex justify-center items-center gap-5 mt-4 text-xl">
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
      <Link to="/money">
        <FaMoneyBill />
      </Link>
    </div>
  );
}
