import { band } from "@/lib/content";

export default function FocusBand() {
  return (
    <section className="section-pad bg-primary-dark text-white">
      <div className="container-x">
        <h2 className="max-w-3xl text-3xl leading-tight md:text-5xl">{band.h2}</h2>

        <h3 className="mt-16 font-sans text-sm font-semibold tracking-normal text-accent">
          {band.listHeading}
        </h3>
        <ul className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {band.items.map((item) => (
            <li
              key={item}
              className="border-b border-white/20 py-4 font-serif text-2xl italic text-white md:text-3xl"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-serif text-2xl italic text-white/80">{band.more}</p>
      </div>
    </section>
  );
}
