import Photo from "./Photo";
import { about, images } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <figure className="mx-auto w-full max-w-sm lg:max-w-none">
          <Photo
            {...images.maya}
            sizes="(min-width: 1024px) 40vw, 80vw"
            position="object-[50%_18%]"
            className="aspect-[4/5] rounded-t-full"
          />
          <figcaption className="mt-4 text-center text-sm text-muted">{about.credential}</figcaption>
        </figure>

        <div>
          <p className="mb-3 text-sm font-medium text-primary">{about.eyebrow}</p>
          <h2 className="text-3xl leading-tight md:text-4xl">{about.h2}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Methods I use">
            {about.methods.map((m) => (
              <li
                key={m}
                className="rounded-full border border-primary/30 bg-white px-4 py-1.5 text-sm font-medium text-primary"
              >
                {m}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary mt-9">
            {about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
