import Photo from "./Photo";
import { images, services, servicesSection } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="section-pad bg-mist">
      <div className="container-x grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl leading-tight md:text-4xl">{servicesSection.h2}</h2>
          <p className="mt-4 max-w-md text-lg text-muted">{servicesSection.sub}</p>
          <Photo
            {...images.services}
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="mt-8 aspect-[4/3] rounded-2xl"
          />
        </div>

        <div className="divide-y divide-primary/20 border-y border-primary/20">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="py-9">
              <h3 className="text-2xl md:text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">{s.text}</p>
              <a
                href="#contact"
                className="mt-5 inline-block font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-primary-dark"
              >
                {servicesSection.link}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
