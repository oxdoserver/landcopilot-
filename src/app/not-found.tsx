import Link from "next/link";
import { btn, eyebrow } from "@/components/styles";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className={eyebrow}>404</p>
      <h1 className="mt-4 font-serif text-4xl text-deep">That page is not here</h1>
      <p className="mt-3 max-w-md leading-7 text-muted">
        The link may be out of date. You can go back to the projects or the office contact page.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className={btn.deep}>
          Home
        </Link>
        <Link href="/projects" className={btn.lineDark}>
          Projects
        </Link>
      </div>
    </section>
  );
}
