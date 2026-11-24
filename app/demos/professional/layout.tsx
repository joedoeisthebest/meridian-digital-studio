
import Link from "next/link";

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-[#20241f] px-6 py-3 text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/services"
            className="transition hover:text-[#c5cbbd]"
          >
            ← Back to Meridian Digital Studio
          </Link>

          <Link
            href="/services"
            className="underline underline-offset-4 transition hover:text-[#c5cbbd]"
          >
            Back to viewing services
          </Link>
        </div>
      </div>

      {children}
    </>
  );
}
