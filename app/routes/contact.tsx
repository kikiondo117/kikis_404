import { Menu } from "~/components/common/Menu/Menu";

export default function Contact() {
  return (
    <main
      className="container mt-20  mx-auto text-white"
      style={{ lineHeight: "1.4" }}
    >
      <div className="mx-auto w-[300px] max-w-xl mt-4 md:mt-8 relative ">
        <video autoPlay loop muted playsInline>
          <source src="/videos/kikis404black.mp4" />
        </video>
      </div>

      <Menu />

      <section className="mt-8 px-8">
        <p className="font-barlow-medium text-center text-3xl md:text-4xl">
          ¿Te gustaria aganedar para un evento?
        </p>

        <p className="mx-auto text-center max-w-xl mt-8">
          información Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          doloribus animi commodi sunt molestiae, non numquam quibusdam,
          necessitatibus in amet consequatur quos eligendi at! Magnam harum odit
          aliquam perspiciatis facere!
        </p>
      </section>
    </main>
  );
}
