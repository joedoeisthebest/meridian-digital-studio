

import Link from "next/link";

const projects = [
  {
    name: "The Quiet Residence",
    category: "Residential Design",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "A Study in Simplicity",
    category: "Apartment Design",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "The Modern Retreat",
    category: "Residential Design",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  },
];

const services = [
  {
    number: "01",
    name: "Interior Design",
    description:
      "Thoughtfully designed interiors that balance beauty, comfort and everyday functionality.",
  },
  {
    number: "02",
    name: "Space Planning",
    description:
      "Carefully considered layouts that make the most of every space.",
  },
  {
    number: "03",
    name: "Project Consultation",
    description:
      "Professional guidance to help bring your ideas into a clear design direction.",
  },
];

export default function ProfessionalDemo() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#25251F]">
      {/* Demonstration notice */}
      <div className="border-b border-black/10 bg-[#EEECE5] px-6 py-3 text-center text-xs tracking-wide text-[#66645D]">
        Professional website demonstration ·{" "}
        <Link href="/services" className="underline underline-offset-4">
          Meridian Digital Studio
        </Link>
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
        <Link href="/demos/professional" className="text-xl font-medium tracking-[0.18em]">
          ATELIER<span className="text-[#A18E70]">.</span>
          <span className="mt-1 block text-[9px] tracking-[0.28em] text-[#77746C]">
            INTERIOR DESIGN
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[#66645D] md:flex">
          <Link href="/demos/professional/about">About</Link>
          <Link href="/demos/professional/services">Services</Link>
          <Link href="/demos/professional/portfolio">Portfolio</Link>
          <Link href="/demos/professional/contact">Contact</Link>
        </nav>

        <Link
          href="/demos/professional/contact"
          className="border border-[#25251F] px-5 py-3 text-xs text-[#25251F] transition-colors hover:bg-[#25251F] hover:text-white"
        >
          Enquire
        </Link>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-12 md:grid-cols-2 md:px-10 md:pb-28 md:pt-16">
        <div>
          <p className="mb-7 text-xs uppercase tracking-[0.25em] text-[#9A896F]">
            Considered spaces. Thoughtful living.
          </p>

          <h1 className="max-w-xl text-5xl font-normal leading-[1.12] tracking-tight md:text-7xl">
            Spaces that feel like home.
          </h1>

          <p className="mt-7 max-w-md text-base leading-8 text-[#77746C]">
            We create considered interiors that bring together timeless
            design, natural materials and the way you live.
          </p>

          <Link
            href="/demos/professional/portfolio"
            className="mt-9 inline-block border-b border-[#25251F] pb-2 text-sm text-[#25251F]"
          >
            Explore our work →
          </Link>
        </div>

        <div className="h-[420px] overflow-hidden md:h-[570px]">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
            alt="Warm minimalist interior living room"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-black/10 bg-[#EEECE5]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-[#9A896F]">
            Our philosophy
          </p>

          <div>
            <h2 className="max-w-xl text-3xl font-normal leading-snug md:text-4xl">
              Good design is not just how a space looks. It is how it makes
              you feel.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#77746C]">
              At Atelier, we believe every home should reflect the people who
              live in it. Our approach combines thoughtful planning,
              considered materials and a strong attention to detail.
            </p>

            <Link
              href="/demos/professional/about"
              className="mt-7 inline-block border-b border-[#25251F] pb-2 text-sm text-[#25251F]"
            >
              Discover our approach →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#9A896F]">
              What we do
            </p>

            <h2 className="text-4xl font-normal tracking-tight md:text-5xl">
              Our services
            </h2>
          </div>

          <Link
            href="/demos/professional/services"
            className="border-b border-[#25251F] pb-2 text-sm text-[#25251F]"
          >
            View all services →
          </Link>
        </div>

        <div className="border-t border-black/15">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid gap-3 border-b border-black/15 py-7 md:grid-cols-[100px_1fr_1fr] md:items-center"
            >
              <span className="text-xs text-[#9A896F]">
                {service.number}
              </span>

              <h3 className="text-xl font-normal">{service.name}</h3>

              <p className="max-w-md text-sm leading-7 text-[#77746C]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-[#EEECE5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#9A896F]">
                Selected projects
              </p>

              <h2 className="text-4xl font-normal tracking-tight md:text-5xl">
                A look at our work
              </h2>
            </div>

            <Link
              href="/demos/professional/portfolio"
              className="border-b border-[#25251F] pb-2 text-sm text-[#25251F]"
            >
              View portfolio →
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                href="/demos/professional/portfolio"
                key={project.name}
                className="group"
              >
                <div className="h-[300px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mt-5 text-lg text-[#25251F]">
                  {project.name}
                </p>

                <p className="mt-1 text-xs tracking-wide text-[#77746C]">
                  {project.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10 md:py-32">
        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9A896F]">
          Start your project
        </p>

        <h2 className="mx-auto max-w-2xl text-4xl font-normal leading-tight tracking-tight text-[#25251F] md:text-6xl">
          Let's talk about your space.
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#77746C]">
          Tell us about your ideas and what you would like to create.
          We would love to hear from you.
        </p>

        <div className="mt-9">
          <Link
            href="/demos/professional/contact"
            className="inline-block border-b border-[#25251F] pb-2 text-sm text-[#25251F] hover:text-[#9A896F]"
          >
            Contact Atelier →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-[#77746C] md:flex-row">
          <p>ATELIER. · Interior Design</p>
          <p>Demonstration website by Meridian Digital Studio</p>
        </div>
      </footer>
    </main>
  );
}
