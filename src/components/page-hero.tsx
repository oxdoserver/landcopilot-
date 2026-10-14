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
    <section className="bg-deep text-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] text-mint uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-balance sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-surface/75 sm:text-lg">{text}</p>
      </div>
    </section>
  );
}
