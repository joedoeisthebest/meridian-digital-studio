
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Full Interior Design",
    description:
      "A complete design service for clients looking to transform their space. From the initial concept to the finer details, every element is carefully considered.",
    includes: ["Design concept", "Material and colour selection", "Furniture and styling direction"],
  },
  {
    number: "02",
    title: "Space Planning",
    description:
      "Make better use of your space with layouts designed around movement, functionality and everyday comfort.",
    includes: ["Space assessment", "Furniture layout", "Functional recommendations"],
  },
  {
    number: "03",
    title: "Design Consultation",
    description:
      "Professional design guidance for clients who need direction, ideas or a second opinion before starting a project.",
    includes: ["Design advice", "Colour and material guidance", "Project recommendations"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#25251F]">
      <div className="border-b border-black/10 bg-[#EEECE5] px-6 py-3 text-center text-xs text-[#66645D]">
        Professional website demonstration · Meridian Digital Studio
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
        <Link href="/demos/professional" className="text-xl font-medium tracking-[0.18em]">
          ATELIER<span className="text-[#A18E70]">.</span>
          <span className="mt-1 block text-[9px] tracking-[0.28em] text-[#77746C]">
            INTERIOR DESIGN
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[#66645D] md:flex">
          <Link href="/demos/professional/about">About</Link>
          <Link href="/demos/professional/services" className="text-[#25251F]">Services</Link>
          <Link href="/demos/professional/portfolio">Portfolio</Link>
          <Link href="/demos/professional/contact">Contact</Link>
        </nav>

        <Link href="/demos/professional/contact" className="border border-[#25251F] px-5 py-3 text-xs">
          Enquire
        </Link>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pt-24">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#9A896F]">
          What we offer
        </p>
        <h1 className="max-w-4xl text-5xl font-normal leading-tight tracking-tight md:text-7xl">
          Considered design, from concept to completion.
        </h1>
        <p className="mt-7 max-w-xl text-sm leading-8 text-[#77746C]">
          Every project is different. Our services are designed to provide
          thoughtful solutions for spaces of different sizes, styles and needs.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
          alt="Warm contemporary living space"
          className="h-[350px] w-full object-cover md:h-[520px]"
        />
      </section>

      <section className="bg-[#EEECE5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#9A896F]">
            Our services
          </p>
          <h2 className="mb-14 text-4xl font-normal md:text-5xl">
            How we can help
          </h2>

          <div className="border-t border-black/15">
            {services.map((service) => (
              <div
                key={service.number}
                className="grid gap-7 border-b border-black/15 py-10 md:grid-cols-[90px_1fr_1fr]"
              >
                <span className="text-xs text-[#9A896F]">{service.number}</span>

                <div>
                  <h3 className="text-2xl font-normal">{service.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-[#77746C]">
                    {service.description}
                  </p>
                </div>

                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#9A896F]">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3 text-sm text-[#66645D]">
                    {service.includes.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#9A896F]">
            Our process
          </p>
          <h2 className="mt-5 text-4xl font-normal leading-tight">
            A clear process. A considered result.
          </h2>
        </div>

        <div className="space-y-8">
          {[
            ["01", "Initial conversation", "We learn about your space, requirements and ideas."],
            ["02", "Design direction", "We develop a direction that brings the project together."],
            ["03", "Refinement", "We refine the details and prepare the design recommendations."],
          ].map(([number, title, description]) => (
            <div key={number} className="border-b border-black/15 pb-7">
              <p className="text-xs text-[#9A896F]">{number}</p>
              <h3 className="mt-3 text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#77746C]">
                {description}
              </p>
            </div>
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



