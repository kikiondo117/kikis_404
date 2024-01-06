import { Link } from "@remix-run/react";

export function Menu() {
  return (
    <nav>
      <ul className="flex justify-center gap-2  text-base font-barlow-extralight uppercase">
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
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
