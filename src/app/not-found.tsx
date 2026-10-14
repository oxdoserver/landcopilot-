import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">404</p>
      <h1 className="mt-3 font-serif text-4xl text-deep">That page is not here</h1>
      <p className="mt-3 max-w-md leading-7 text-muted">
        The link may be out of date. You can go back to the projects or the office contact page.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="rounded-full bg-mint px-5 py-3 text-sm font-medium text-white">
          Home
        </Link>
        <Link href="/projects" className="rounded-full border border-line px-5 py-3 text-sm font-medium text-deep">
          Projects
        </Link>
      </div>
    </section>
  );
}
