import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faqs" className="section-pad bg-surface">
      <div className="container-x grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <h2 className="text-3xl leading-tight md:text-4xl">
          Questions about therapy in Santa Monica
        </h2>
        <div className="divide-y divide-primary/20 border-y border-primary/20">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
