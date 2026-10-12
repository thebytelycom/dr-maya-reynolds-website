import Photo from "./Photo";
import { who } from "@/lib/content";

export default function WhoIHelp() {
  return (
    <section id="who" className="section-pad bg-mist">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">
            {who.h2Start}
            <em className="text-primary">{who.h2Em}</em>
          </h2>
          <p className="mt-3 text-lg text-muted">{who.sub}</p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {who.cards.map((c) => (
            <article key={c.title}>
              <Photo
                {...c.image}
                sizes="(min-width: 768px) 30vw, 100vw"
                className="aspect-[4/5] rounded-2xl"
              />
              <h3 className="mt-6 text-2xl">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
