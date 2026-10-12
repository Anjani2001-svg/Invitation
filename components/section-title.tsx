import { DividerOrnament } from "@/components/ornaments";

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="kicker text-sage-dark">{eyebrow}</p>
      <h2 className="display-serif mt-5 text-5xl leading-[.95] tracking-[-.025em] sm:text-6xl md:text-7xl">
        {title}
      </h2>
      <DividerOrnament className="mt-7" />
      {description ? <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">{description}</p> : null}
    </div>
  );
}
