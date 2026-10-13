import { footer, nav, site } from "@/lib/content";

export default function Footer() {
  const { address } = site;
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{footer.blurb}</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-accent">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-accent">Office</p>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            {address.street}
            <br />
            {address.city}, {address.region} {address.zip}
          </address>
          <p className="mt-3 text-sm leading-relaxed">{footer.serving}</p>
        </div>
      </div>

            <div className="border-t border-white/15">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/65 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Fictional practice created for a design assignment.
          </p>
          <p>{footer.crisis}</p>
        </div>
        <p className="container-x pb-6 text-center text-xs text-white/65">
          Developed by thebytely
        </p>
      </div>
    </footer>
  );
}
