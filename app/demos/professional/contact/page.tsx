
import Link from "next/link";

export default function ContactPage() {
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
          <Link href="/demos/professional/portfolio">Portfolio</Link>
          <Link
            href="/demos/professional/contact"
            className="text-[#25251F]"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/services"
          className="border border-[#25251F] px-5 py-3 text-xs"
        >
          Meridian Studio
        </Link>
      </header>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-16 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#9A896F]">
            Get in touch
          </p>

          <h1 className="max-w-xl text-5xl font-normal leading-tight tracking-tight md:text-7xl">
            Let&apos;s talk about your space.
          </h1>

          <p className="mt-7 max-w-md text-sm leading-8 text-[#77746C]">
            Whether you have a clear vision or are just beginning to explore
            ideas, we would love to hear about your project.
          </p>

          <div className="mt-14 border-t border-black/15 pt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9A896F]">
              General enquiries
            </p>
            <p className="mt-3 text-lg">hello@atelier.example</p>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#9A896F]">
              Location
            </p>
            <p className="mt-3 text-sm text-[#77746C]">
              Singapore
            </p>
          </div>
        </div>

        <div className="bg-[#EEECE5] p-7 md:p-10">
          <h2 className="text-2xl font-normal">Tell us about your project.</h2>
          <p className="mt-3 text-sm leading-7 text-[#77746C]">
            Share a few details and we can start a conversation.
          </p>

          <form
            action="mailto:hello@atelier.example"
            method="post"
            encType="text/plain"
            className="mt-10 space-y-7"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-xs">
                Your name
              </label>
              <input
                id="name"
                name="Name"
                type="text"
                required
                placeholder="Full name"
                className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#A09D94] focus:border-[#25251F]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs">
                Email address
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#A09D94] focus:border-[#25251F]"
              />
            </div>

            <div>
              <label htmlFor="project" className="mb-2 block text-xs">
                Type of project
              </label>
              <select
                id="project"
                name="Project type"
                defaultValue=""
                className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#25251F]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Full interior design</option>
                <option>Space planning</option>
                <option>Design consultation</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs">
                Tell us a little about your project
              </label>
              <textarea
                id="message"
                name="Message"
                required
                rows={4}
                placeholder="Your ideas, requirements and timeline..."
                className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#A09D94] focus:border-[#25251F]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#25251F] px-8 py-4 text-sm text-white transition hover:bg-[#49483F]"
            >
              Send enquiry
            </button>
          </form>

          <p className="mt-5 text-xs leading-5 text-[#88857D]">
            Demonstration form only. It uses your device&apos;s email
            application and does not store submissions.
          </p>
        </div>
      </section>

      <section className="bg-[#25251F] px-6 py-20 text-center text-[#F8F7F3] md:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C0AE8D]">
          ATELIER.
        </p>
        <h2 className="mt-5 text-3xl font-normal md:text-4xl">
          Thoughtful spaces. Meaningful living.
        </h2>
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
