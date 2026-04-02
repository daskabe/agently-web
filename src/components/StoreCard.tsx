import { Button } from './Button';

type StoreCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export function StoreCard({
  eyebrow,
  title,
  description,
  href,
  cta,
}: StoreCardProps) {
  return (
    <article className="store-card">
      <p className="store-card__eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p className="store-card__description">{description}</p>
      <Button asChild>
        <a href={href} target="_blank" rel="noreferrer">
          {cta}
        </a>
      </Button>
    </article>
  );
}
