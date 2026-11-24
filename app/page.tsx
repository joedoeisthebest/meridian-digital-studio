
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Design",
    description:
      "Thoughtful, modern website designs built around your brand, your audience and your business goals.",
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Responsive, high-performance websites developed with attention to detail and long-term reliability.",
  },
  {
    number: "03",
    title: "Custom Web Solutions",
    description:
      "Purpose-built digital tools, integrations and functionality designed around the way your business works.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#171717]">
      <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            MERIDIAN<span className="font-normal">.</span>
          </Link>

         <nav className="hidden items-center gap-9 text-sm text-[#666] md:flex">

            <Link href="/about" className="transition hover:text-black">
  About
</Link>
           
            <Link href="/services" className="transition hover:text-black">
              Services
            </Link>
            <Link href="/contact" className="transition hover:text-black">
  Contact
</Link>
          </nav>
        </div>
      </header>

      
{/* ABOUT SECTION */}
<section id="about" className="bg-[#EFEFEB]">
  <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10">
    <h1 className="text-lg font-semibold tracking-tight md:text-xl">
      More value. Better websites. Fairer prices.
    </h1>

    <p className="max-w-2xl text-sm leading-6 text-[#666]">
      We create high-quality, professionally designed websites at highly competitive prices. Our goal is simple: deliver excellent work, thoughtful design and reliable development at a price that makes sense for your business.
    </p>
  </div>
</section>

      {/* HERO SECTION */}
      <section className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:px-10">
        <div>
          <p className="mb-9 text-xs font-medium uppercase tracking-[0.25em] text-[#777]">
            Independent digital studio · Singapore
          </p>

          <h2 className="text-6xl font-medium leading-[1.02] tracking-[-0.065em] md:text-7xl lg:text-[86px]">
            Digital
            <br />
            experiences,
            <br />
            <span className="text-[#999]">considered.</span>
          </h2>

          <p className="mt-9 max-w-md text-base leading-8 text-[#777]">
            We design and develop thoughtful websites and digital solutions
            for businesses ready to move forward.
          </p>

          <div className="mt-10 flex items-center gap-8">
            <a
              href="#contact"
              style={{
                background: "#171717",
                color: "#ffffff",
                padding: "16px 28px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Start a project
            </a>

            
            <Link
  href="/services"
  className="text-sm text-[#666] transition hover:text-black"
>
  Explore services ↗
</Link>
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center bg-[#eeeee9] p-8 md:min-h-[520px]">
          <div className="absolute left-7 top-7 text-xs uppercase tracking-[0.2em] text-[#888]">
            Meridian / 001
          </div>

          <div className="relative flex h-[280px] w-[280px] items-center justify-center border border-[#c9c9c0] md:h-[360px] md:w-[360px]">
            <div className="absolute h-[220px] w-[220px] rounded-full border border-[#c9c9c0] md:h-[280px] md:w-[280px]" />
            <div className="absolute h-[150px] w-[150px] rotate-45 border border-[#aaa99f] md:h-[190px] md:w-[190px]" />
            <span className="text-5xl font-light tracking-[-0.08em] md:text-6xl">
              M.
            </span>
          </div>

          <div className="absolute bottom-7 right-7 text-xs text-[#888]">
            Thoughtfully built.
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#777]">
                What we do
              </p>
              <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
                Digital, made purposeful.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#777]">
              Practical digital services, carefully considered and developed
              to meet the needs of modern businesses.
            </p>
          </div>

          <div className="border-t border-black/15">
            {services.map((service) => (
              <div
                key={service.number}
                className="grid gap-5 border-b border-black/15 py-9 md:grid-cols-[100px_1fr_1fr] md:items-start"
              >
                <span className="text-xs text-[#999]">{service.number}</span>
                <h3 className="text-2xl font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="max-w-md text-sm leading-7 text-[#777]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-32 md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#777]">
          Have a project in mind?
        </p>

        <h2 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight md:text-7xl">
          Let's build something worthwhile.
        </h2>

        <p className="mt-8 max-w-md text-sm leading-7 text-[#777]">
          Tell us a little about your business and what you would like to
          create.
        </p>

        <Link
  href="/contact"
  className="mt-9 inline-block border border-[#171717] px-7 py-4 text-sm transition hover:bg-[#171717] hover:text-white"
>
  Get in touch ↗
</Link>
      </section>

      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 text-xs text-[#777] md:flex-row md:items-center md:px-10">
          <p className="font-semibold tracking-tight text-[#171717]">
            MERIDIAN.
          </p>
          <p>Independent digital studio · Singapore</p>
          <p>© 2026 Meridian Digital Studio</p>
        </div>
      </footer>
    </main>
  );
}
