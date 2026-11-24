
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#171717]">
      <header className="border-b border-[#e5e5df]">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-[0.18em]">
            MERIDIAN
          </Link>

          <nav className="flex items-center gap-6 text-sm text-[#666] md:gap-9">
            <Link href="/about" className="text-black">
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

      <section className="container py-28 md:py-36">
        <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-[#777]">
          About Meridian
        </p>

        <h1 className="max-w-5xl text-5xl font-medium leading-tight tracking-tight md:text-7xl">
          Good digital work should be accessible to more businesses.
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-9 text-[#777]">
          Meridian Digital Studio is an independent digital studio based in
          Singapore. We design and develop websites and digital solutions
          with a focus on quality, functionality and thoughtful design.
        </p>
      </section>

      <section className="border-y border-[#e5e5df] bg-[#EFEFEB]">
        <div className="container grid gap-12 py-24 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#777]">
              Our approach
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight">
              Thoughtful design. Reliable development. Clear communication.
            </h2>
          </div>

          <div className="space-y-7 text-base leading-8 text-[#666]">
            <p>
              We believe a website should do more than simply look good. It
              should communicate clearly, work reliably and give visitors a
              reason to engage with your business.
            </p>
            <p>
              Every project begins with understanding what a business needs
              and who it wants to reach. From there, we focus on creating a
              digital experience that is practical, considered and built for
              its intended purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#777]">
          What matters to us
        </p>

        <div className="mt-12 divide-y divide-[#e5e5df] border-t border-[#e5e5df]">
          <div className="grid gap-4 py-9 md:grid-cols-[1fr_2fr]">
            <h3 className="text-xl font-medium">Quality</h3>
            <p className="max-w-xl leading-7 text-[#777]">
              Careful attention to design, development and the details that
              make a website work well.
            </p>
          </div>

          <div className="grid gap-4 py-9 md:grid-cols-[1fr_2fr]">
            <h3 className="text-xl font-medium">Fair pricing</h3>
            <p className="max-w-xl leading-7 text-[#777]">
              Professional websites at competitive prices, with clear
              expectations about what each project includes.
            </p>
          </div>

          <div className="grid gap-4 py-9 md:grid-cols-[1fr_2fr]">
            <h3 className="text-xl font-medium">Practicality</h3>
            <p className="max-w-xl leading-7 text-[#777]">
              Solutions designed around real business needs rather than
              unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-4 py-9 md:grid-cols-[1fr_2fr]">
            <h3 className="text-xl font-medium">Communication</h3>
            <p className="max-w-xl leading-7 text-[#777]">
              A straightforward process, clear discussions and an emphasis
              on understanding each client's requirements.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e5e5df]">
        <div className="container flex flex-col justify-between gap-4 py-8 text-xs text-[#888] sm:flex-row">
          <span>© 2026 Meridian Digital Studio</span>
          <span>Thoughtful websites for modern businesses.</span>
        </div>
      </footer>
    </main>
  );
}
