import Photo from "./Photo";
import { hero, images } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="bg-surface">
      <div className="container-x grid items-center gap-12 py-12 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-5 max-w-md text-sm font-medium text-primary">{hero.eyebrow}</p>
          <h1 className="text-4xl leading-[1.1] md:text-5xl lg:text-[3.4rem]">
            {hero.h1Start}
            <em className="text-primary">{hero.h1Em}</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-primary">
              {hero.primaryCta}
            </a>
            <a href="#about" className="btn btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-md grid-cols-5 items-end gap-4 lg:max-w-none">
          <Photo
            {...images.hero1}
            priority
            sizes="(min-width: 1024px) 30vw, 60vw"
            className="col-span-3 aspect-[3/4] rounded-t-full"
          />
          <Photo
            {...images.hero2}
            sizes="(min-width: 1024px) 20vw, 40vw"
            className="col-span-2 aspect-square rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
