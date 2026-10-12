import ContactForm from "./ContactForm";
import Photo from "./Photo";
import { cta, images } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-primary text-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-medium text-accent">{cta.eyebrow}</p>
          <h2 className="text-3xl leading-tight md:text-4xl">{cta.h2}</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/90">{cta.text}</p>
          <Photo
            {...images.cta}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="mt-8 hidden aspect-[16/10] rounded-2xl lg:block"
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
