import Photo from "./Photo";
import { images, intro } from "@/lib/content";

export default function Intro() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[6fr_5fr] lg:gap-16">
        <div>
          <h2 className="max-w-xl text-3xl leading-tight md:text-4xl">{intro.h2}</h2>
          <p className="mt-5 font-serif text-xl italic text-primary">{intro.tagline}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{intro.p1}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{intro.p2}</p>
        </div>
        <Photo {...images.intro} className="aspect-[4/3] rounded-2xl" />
      </div>
    </section>
  );
}
