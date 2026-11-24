
import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "The Quiet Residence",
    category: "Residential · Singapore",
    description:
      "A warm, understated home built around natural textures, soft neutral tones and comfortable everyday living.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "02",
    name: "A Study in Simplicity",
    category: "Apartment · Singapore",
    description:
      "A contemporary apartment with clean architectural lines, carefully selected materials and a calm atmosphere.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "03",
    name: "The Modern Retreat",
    category: "Residential · Singapore",
    description:
      "A refined living space that balances modern design with natural finishes and inviting details.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "04",
    name: "A Softer Perspective",
    category: "Living Space · Singapore",
    description:
      "A light-filled interior designed around simplicity, openness and a sense of ease.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#25251F]">
      <div className="border-b border-black/10 bg-[#EEECE5] px-6 py-3 text-center text-xs text-[#66645D]">
        Professional website demonstration · Meridian Digital Studio
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
        <Link
          href="/demos/professional"
          className="text-xl font-medium tracking-[0.18em]"
        >
          ATELIER<span className="text-[#A18E70]">.</span>
          <span className="mt-1 block text-[9px] tracking-[0.28em] text-[#77746C]">
            INTERIOR DESIGN
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[#66645D] md:flex">
          <Link href="/demos/professional/about">About</Link>
          <Link href="/demos/professional/services">Services</Link>
          <Link
            href="/demos/professional/portfolio"
            className="text-[#25251F]"
          >
            Portfolio
          </Link>
          <Link href="/demos/professional/contact">Contact</Link>
        </nav>

        <Link
          href="/demos/professional/contact"
          className="border border-[#25251F] px-5 py-3 text-xs"
        >
          Enquire
        </Link>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#9A896F]">
          Selected work
        </p>
        <h1 className="max-w-4xl text-5xl font-normal leading-tight tracking-tight md:text-7xl">
          Spaces shaped around the way we live.
        </h1>
        <p className="mt-7 max-w-xl text-sm leading-8 text-[#77746C]">
          A collection of considered interiors, thoughtful details and
          contemporary spaces.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number}>
              <div className="group h-[320px] overflow-hidden md:h-[420px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#9A896F]">
                    {project.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-normal">
                    {project.name}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#77746C]">
                    {project.description}
                  </p>
                </div>
                <span className="text-xs text-[#9A896F]">
                  {project.number}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#EEECE5] px-6 py-24 text-center md:px-10 md:py-32">
        <p className="text-xs uppercase tracking-[0.25em] text-[#9A896F]">
          Your project could be next
        </p>
        
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-normal md:text-5xl">
          Lets talk about your space.
        </h2>
         <Link
          href="/demos/professional/contact"
          className="mt-8 inline-block border border-[#25251F] px-5 py-3 text-xs text-[#25251F] transition-colors hover:bg-[#25251F] hover:text-white"
        >
          Enquire
        </Link>
        </section>

      <footer className="border-t border-black/10 px-6 py-8 text-xs text-[#77746C] md:px-10">
        <div className="mx-auto flex max-w-7xl justify-between">
          <p>ATELIER. · Interior Design</p>
          <p>Demonstration website by Meridian Digital Studio</p>
        </div>
      </footer>
    </main>
  );
}
