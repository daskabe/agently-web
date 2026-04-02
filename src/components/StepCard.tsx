type StepCardProps = {
  number: string;
  title: string;
  body: string;
};

export function StepCard({ number, title, body }: StepCardProps) {
  return (
    <article className="step-card">
      <span className="step-card__number">{number}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
