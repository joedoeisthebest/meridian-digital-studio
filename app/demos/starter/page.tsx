
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Home Cleaning",
    description:
      "Reliable cleaning for apartments, condominiums and landed homes.",
  },
  {
    number: "02",
    title: "Office Cleaning",
    description:
      "Clean, organised workspaces that create a better working environment.",
  },
  {
    number: "03",
    title: "Deep Cleaning",
    description:
      "A more thorough clean for spaces that need extra attention.",
  },
];

export default function StarterDemo() {
  return (
    <main className="min-h-screen bg-white text-[#20241f]">

    {/* DEMO NOTICE */}
<div className="bg-[#20241f] px-6 py-3 text-xs text-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between">
    <Link
      href="/services"
      className="transition hover:text-[#c5cbbd]"
    >
       ← Back to viewing services
    </Link>

  </div>
  </div>

      {/* HEADER */}
      <header className="border-b border-[#eaeae5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Link href="/demos/starter" className="text-xl font-semibold tracking-tight">
            luma<span className="font-normal text-[#87927c]">.</span>
          </Link>

          <nav className="hidden items-center gap-9 text-sm text-[#666] md:flex">
            <a href="#about" className="transition hover:text-black">
              About
            </a>
            <a href="#services" className="transition hover:text-black">
              Services
            </a>
            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="bg-[#65735b] px-5 py-3 text-sm text-white transition hover:bg-[#4f5c47]"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.22em] text-[#87927c]">
            Professional cleaning · Singapore
          </p>

          <h1 className="max-w-xl text-5xl font-medium leading-[1.08] tracking-tight md:text-7xl">
            A cleaner space.
            <br />
            <span className="text-[#87927c]">A clearer mind.</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-8 text-[#777]">
            Thoughtful, reliable cleaning services for homes and businesses.
            We take care of the details so you can focus on what matters.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="bg-[#65735b] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#4f5c47]"
            >
              Request a quotation
            </a>

            <a
              href="#services"
              className="text-sm text-[#555] transition hover:text-black"
            >
              Explore services →
            </a>
          </div>

          <p className="mt-12 text-xs tracking-wide text-[#999]">
            SERVING HOMES AND BUSINESSES ACROSS SINGAPORE
          </p>
        </div>

        <div className="relative min-h-[390px] overflow-hidden bg-[#eeeee8] md:min-h-[510px]">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Bright, clean and modern living room"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white/95 px-6 py-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[#87927c]">
              The Luma standard
            </p>
            <p className="mt-2 text-lg font-medium">
              Clean spaces. Thoughtful care.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="about" className="bg-[#f4f4ef]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 md:py-20">
          <h2 className="max-w-lg text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            We believe a clean space makes all the difference.
          </h2>

          <p className="text-sm leading-8 text-[#777] md:text-base">
            At Luma Cleaning Co., we believe cleaning is about more than
            appearances. It is about creating comfortable, welcoming spaces
            where people can live and work with confidence. Our approach is
            simple: careful work, dependable service and attention to detail.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <div className="mb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#87927c]">
            What we offer
          </p>
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            Cleaning, made simple.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#777]">
            Practical cleaning solutions designed around your space and your
            schedule.
          </p>
        </div>

        <div className="grid gap-10 border-t border-[#e5e5df] md:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <div key={service.number} className="pt-8">
              <p className="text-xs text-[#9a9a91]">{service.number}</p>
              <h3 className="mt-6 text-xl font-medium">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#777]">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-7 inline-block text-sm text-[#65735b] hover:text-black"
              >
                Make an enquiry →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="grid md:grid-cols-2">
        <div className="min-h-[340px] md:min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt="Bright and carefully maintained interior"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#e9ebe4] px-8 py-16 md:px-16 md:py-24">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#87927c]">
            Our approach
          </p>
          <h2 className="max-w-md text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            The little details matter.
          </h2>
          <p className="mt-7 max-w-md text-sm leading-8 text-[#777]">
            From the first room to the final finishing touches, we believe
            every part of your space deserves attention. That is the standard
            we aim to bring to every cleaning visit.
          </p>
          <a
            href="#contact"
            className="mt-9 text-sm font-medium text-[#65735b]"
          >
            Get in touch →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#87927c]">
          Get in touch
        </p>

        <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          Ready for a fresher space?
        </h2>

        <p className="mt-7 max-w-md text-sm leading-7 text-[#777]">
          Tell us about your space and what you need. We would be happy to
          discuss a suitable cleaning solution.
        </p>

        <a
          href="mailto:hello@example.com"
          className="mt-9 inline-block bg-[#65735b] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#4f5c47]"
        >
          Contact our team →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#eaeae5]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 text-xs text-[#888] md:flex-row md:items-center md:px-10">
          <p className="text-lg font-semibold tracking-tight text-[#20241f]">
            luma.
          </p>
          <p>Professional cleaning services · Singapore</p>
          <p>© 2026 Luma Cleaning Co.</p>
        </div>
      </footer>

    </main>
  );
}
