import { Link } from "@remix-run/react";
import { CopyButton } from "~/components/common/CopyButton./CopyButton";

export default function Money() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center mt-20 text-3xl md:text-5xl">
        KIKIS 404 MONEY
      </h1>

      <p className="text-center mt-4 font-barlow-thin">
        Gracias por intentar pagarme alguna deuda que tengamos c:
        <br />
        <span className="underline">Nombre: Carlos Alberto Vera</span>
      </p>

      <section className="text-center mt-8 flex flex-col gap-8">
        <CopyButton text="Clabe SPEI" number="646180146008987758" />
        <CopyButton text="BBVA Tarjeta" number="4152 3141 7676 0059" />
      </section>

      <section className="mx-auto w-[300px] h-[30vh] max-w-xl mt-4 md:mt-8 relative ">
        <img
          className="w-full h-full"
          src="https://media3.giphy.com/media/ehVD71SQYsCHWrWgvs/giphy.gif?cid=ecf05e4769y3w72d2yjwulhfkn8dvadf7ozrsoyvnsxx21uv&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt=""
        />
      </section>

      <div className="flex justify-center mt-4">
        <Link
          className=" border-solid border-2 text-white px-4  py-2 rounded-md"
          to="/"
        >
          Regresar
        </Link>
      </div>
    </main>
  );
}
