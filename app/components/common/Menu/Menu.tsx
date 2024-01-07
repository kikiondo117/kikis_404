import { Link } from "@remix-run/react";

export function Menu() {
  const segmentMenuTrack = (section: string) => {
    // @ts-ignore
    analytics.track("Menu Click", {
      menu_section: section,
    });
  };

  return (
    <nav>
      <ul className="flex justify-center gap-2  text-base font-barlow-extralight uppercase">
        <li>
          <Link
            onClick={() => {
              segmentMenuTrack("Mercancia");
            }}
            to="https://www.amazon.com.mx/"
            target="_blank"
          >
            Mercancia
          </Link>
        </li>
        <li>|</li>

        <li>
          <Link
            onClick={() => {
              segmentMenuTrack("DJ Sets");
            }}
            to="/sets"
          >
            DJ Sets
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link
            onClick={() => {
              segmentMenuTrack("Contact");
            }}
            to="/contact"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
