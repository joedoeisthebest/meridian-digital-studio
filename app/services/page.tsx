
import Link from "next/link";

const packages = [
  {
    name: "Starter",
    price: "S$500–900",
    description: "A professional online presence for small businesses getting started.",
    pages: "Up to 4 pages",
    features: [
      "Custom website design",
      "Responsive mobile design",
      "Contact form",
      "Basic on-page SEO",
      "Social media links",
      "Basic performance optimisation",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Professional",
    price: "S$900–1,800",
    description: "A more developed website for businesses ready to grow.",
    pages: "Up to 7 pages",
    features: [
      "Custom website design",
      "Responsive mobile design",
      "Advanced contact form",
      "Basic SEO setup",
      "Google Maps integration",
      "Social media integration",
      "2 rounds of revisions",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "S$1,800–3,500",
    description: "A bespoke website with more room for content and functionality.",
    pages: "Up to 12 pages",
    features: [
      "Bespoke website design",
      "Responsive mobile design",
      "Advanced functionality",
      "SEO enhancement",
      "Blog or gallery integration",
      "Performance optimisation",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Custom Development",
    price: "From S$3,500",
    description: "Purpose-built digital solutions for more complex requirements.",
    pages: "Based on project scope",
    features: [
      "Custom functionality",
      "Database integration",
      "User accounts and authentication",
      "API integrations",
      "Custom dashboards",
      "Scalable architecture",
      "Project-specific development",
    ],
  },
];

const addons = [
  ["Additional page", "S$100–200"],
  ["Extra revision round", "S$80–150"],
  ["Advanced contact form", "S$100–200"],
  ["WhatsApp integration", "S$50–100"],
  ["Google Maps integration", "S$50–100"],
  ["Gallery integration", "S$100–200"],
  ["Blog integration", "S$150–300"],
  ["Booking integration", "S$200–500"],
  ["SEO enhancement", "S$150–300"],
  ["Copywriting", "S$80–150 per page"],
  ["Additional language", "S$200–500+"],
  ["Custom animations", "S$100–300"],
];

const maintenance = [
  {
    name: "Essential",
    price: "S$39",
    description: "For businesses that need basic ongoing website care.",
  },
  {
    name: "Standard",
    price: "S$79",
    description: "For businesses that want more regular website support.",
  },
  {
    name: "Advanced",
    price: "S$149",
    description: "For businesses that need a higher level of ongoing support.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#171717]">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="text-xl font-semibold tracking-[-0.06em]">
          MERIDIAN<span className="text-[#888880]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[#666660] md:flex">
          <Link href="/about" className="transition hover:text-black">
            About
          </Link>
          <Link href="/services" className="text-black">
            Services
          </Link>
      
          <Link href="/contact" className="transition hover:text-black">
            Contact
          </Link>
        </nav>


      </header>



      {/* Packages */}
      <section
        id="packages"
        className="border-y border-black/10 bg-[#EFEFEB] px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#888880]">
              Website packages
            </p>

            <h2 className="text-4xl font-normal tracking-tight md:text-5xl">
              Find the right fit.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#777770]">
              Different businesses need different things. Choose a package
              that suits your requirements, with the flexibility to add
              features as your business grows.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {packages.map((item) => (
              <div
                key={item.name}
                className={`flex flex-col border p-7 md:p-9 ${
                  item.featured
                    ? "border-[#171717] bg-[#F8F8F6]"
                    : "border-black/10 bg-[#F8F8F6]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#888880]">
                      {item.name}
                    </p>
                    <h3 className="mt-5 text-3xl font-normal tracking-tight">
                      {item.price}
                    </h3>
                  </div>

                  {item.featured && (
                    <span className="border border-[#171717] px-3 py-2 text-[10px] uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                <p className="mt-5 min-h-[48px] max-w-sm text-sm leading-7 text-[#777770]">
                  {item.description}
                </p>

                <div className="mt-7 border-y border-black/10 py-4">
                  <p className="text-sm font-medium">{item.pages}</p>
                </div>

                <ul className="mt-6 flex-1 space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-[#55554F]"
                    >
                      <span className="text-[#888880]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
  href="/contact"
  className="mt-9 block border border-[#171717] px-5 py-4 text-center text-xs transition-colors hover:bg-[#171717] hover:text-white"
>
  Enquire about this package →
</Link>

{item.name === "Starter" && (
  <Link
    href="/demos/starter"
    className="mt-4 block text-center text-sm text-[#666660] underline underline-offset-4 transition hover:text-black"
  >
    View Starter demo →
  </Link>
)}

{item.name === "Professional" && (
  <Link
    href="/demos/professional"
    className="mt-4 block text-center text-sm text-[#666660] underline underline-offset-4 transition hover:text-black"
  >
    View Professional demo →
  </Link>
)}

{item.name === "Premium" && (
  <p className="mt-4 text-center text-sm text-[#888880]">
    Premium demo coming soon
  </p>
)}
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs leading-6 text-[#777770]">
            Prices are indicative and may vary depending on project
            requirements, content and functionality. A final quotation
            will be provided before work begins.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#888880]">
              Additional features
            </p>

            <h2 className="max-w-md text-4xl font-normal tracking-tight md:text-5xl">
              Make your website your own.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#777770]">
              Need something beyond your selected package? Add individual
              features to create a website that works exactly the way
              your business needs.
            </p>
          </div>

          <div className="border-t border-black/15">
            {addons.map(([name, price]) => (
              <div
                key={name}
                className="flex items-center justify-between gap-5 border-b border-black/15 py-5"
              >
                <p className="text-sm">{name}</p>
                <p className="whitespace-nowrap text-sm text-[#777770]">
                  {price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="bg-[#EFEFEB] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#888880]">
            Ongoing support
          </p>

          <h2 className="text-4xl font-normal tracking-tight md:text-5xl">
            We can help after launch, too.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#777770]">
            A website needs attention even after it goes live. Our
            maintenance options provide ongoing support to help keep
            your website looked after.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {maintenance.map((plan) => (
              <div
                key={plan.name}
                className="border border-black/10 bg-[#F8F8F6] p-7 md:p-9"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[#888880]">
                  {plan.name}
                </p>

                <h3 className="mt-5 text-4xl font-normal">
                  {plan.price}
                  <span className="ml-1 text-sm text-[#777770]">
                    / month
                  </span>
                </h3>

                <p className="mt-5 min-h-[56px] text-sm leading-7 text-[#777770]">
                  {plan.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-block border-b border-[#171717] pb-2 text-sm transition-colors hover:text-[#888880]"
                >
                  Ask about this plan →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-[#777770] md:flex-row">
          <p>MERIDIAN DIGITAL STUDIO</p>
          <p>Thoughtful websites. Built with purpose.</p>
        </div>
      </footer>
    </main>
  );
}
