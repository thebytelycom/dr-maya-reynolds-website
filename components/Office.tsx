import Photo from "./Photo";
import { images, office } from "@/lib/content";

export default function Office() {
  return (
    <section id="office" className="section-pad bg-white">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[5fr_6fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-medium text-primary">{office.eyebrow}</p>
          <h2 className="text-3xl leading-tight md:text-4xl">{office.h2}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{office.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{office.p2}</p>

          <dl className="mt-8 divide-y divide-primary/15 border-y border-primary/15">
            {office.details.map((d) => (
              <div key={d.label} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="text-sm font-semibold text-primary">{d.label}</dt>
                <dd className="text-ink">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative pb-6">
          <Photo
            {...images.office1}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] rounded-2xl"
          />
          <Photo
            {...images.office2}
            sizes="(min-width: 1024px) 38vw, 75vw"
            className="-mt-12 ml-auto aspect-[4/3] w-3/4 rounded-2xl border-[6px] border-white shadow-lg md:-mt-16"
          />
        </div>
      </div>
    </section>
  );
}
