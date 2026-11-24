
import Link from "next/link";

export default function AboutPage() {
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
          <Link href="/demos/professional/about" className="text-[#25251F]">About</Link>
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

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#9A896F]">
          About Atelier
        </p>
        <h1 className="max-w-4xl text-5xl font-normal leading-tight tracking-tight md:text-7xl">
          Design with intention. Spaces with meaning.
        </h1>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
          alt="Thoughtfully designed contemporary interior"
          className="h-[350px] w-full object-cover md:h-[560px]"
        />
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#9A896F]">
            Who we are
          </p>
          <h2 className="mt-5 text-4xl font-normal leading-tight">
            We believe the best spaces are the ones that feel natural.
          </h2>
        </div>

        <div className="space-y-6 text-sm leading-8 text-[#77746C]">
          <p>
            Atelier is a fictional interior design studio created to
            demonstrate a professional business website. Its design reflects
            the experience a real interior design practice could offer:
            considered layouts, clear information and strong visual
            presentation.
          </p>
          <p>
            Our design philosophy centres on simplicity, thoughtful material
            choices and spaces that support everyday life. Every detail should
            have a purpose, and every room should feel connected to the people
            who use it.
          </p>
        </div>
      </section>

      <section className="bg-[#EEECE5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9A896F]">
              Our approach
            </p>
            <h2 className="mt-5 text-3xl font-normal">Thoughtful by design.</h2>
          </div>

          <div>
            <h3 className="text-lg">01. Understand</h3>
            <p className="mt-4 text-sm leading-7 text-[#77746C]">
              Begin with the people, their needs and the way they want to live.
            </p>
          </div>

          <div>
            <h3 className="text-lg">02. Create</h3>
            <p className="mt-4 text-sm leading-7 text-[#77746C]">
              Develop a clear design direction with considered materials and
              practical layouts.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center md:px-10 md:py-32">
        <p className="text-xs uppercase tracking-[0.25em] text-[#9A896F]">
          Work with us
        </p>

        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-normal md:text-5xl">
          Have a project in mind?
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
