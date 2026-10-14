import { eyebrow as eyebrowClass } from "@/components/styles";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <p className={eyebrowClass}>{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-balance text-deep sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">{text}</p>
      </div>
    </section>
  );
}
