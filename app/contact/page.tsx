
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#171717]">
      <header className="border-b border-[#e5e5df]">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-[0.18em]">
            MERIDIAN
          </Link>

          <nav className="flex items-center gap-6 text-sm text-[#666] md:gap-9">
            <Link href="/#about" className="transition hover:text-black">
              About
            </Link>
            <Link href="/services" className="transition hover:text-black">
              Services
            </Link>
            <Link href="/contact" className="text-black">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="container py-32 md:py-40">
        <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-[#777]">
          Contact
        </p>

        <h1 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight md:text-7xl">
          Let's start a conversation.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-8 text-[#777]">
          Have a project in mind, a question about our services, or simply
          want to find out more? We'd be happy to hear from you.
        </p>

        <div className="mt-16 border-t border-[#e5e5df] pt-10">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-[#777]">
            Email us
          </p>

          <a
            href="mailto:meridian.digital.sg@outlook.com"
            className="break-all text-xl font-medium underline decoration-[#c9c9c0] underline-offset-8 transition hover:text-[#777] md:text-3xl"
          >
            meridian.digital.sg@outlook.com
          </a>

          <p className="mt-8 text-sm text-[#777]">
            We look forward to hearing from you.
          </p>
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
