import Reveal from "@/components/Reveal";

type Card = {
  id?: string;
  code: string;
  title: string;
  body: string;
  meta?: string;
  metaLinkText?: string;
  metaLinkHref?: string;
};

export default function CardGrid({ cards }: { cards: Card[] }) {
  return (
    <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
      {cards.map((card, i) => (
        <div
          key={card.title}
          id={card.id}
          className="bg-paper p-9 transition-colors hover:bg-paper-2"
        >
          <Reveal delay={i * 80}>
            <div className="font-mono text-[12.5px] tracking-wide text-crimson">{card.code}</div>
            <h3 className="mt-5 mb-3.5 font-fraunces text-[22px] font-semibold text-navy">
              {card.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-muted">{card.body}</p>
            {(card.meta || card.metaLinkText) && (
              <p className="mt-4 text-[12.5px] text-muted">
                {card.meta}
                {card.meta && card.metaLinkText && " · "}
                {card.metaLinkText && (
                  <a href={card.metaLinkHref} className="font-semibold text-crimson">
                    {card.metaLinkText}
                  </a>
                )}
              </p>
            )}
          </Reveal>
        </div>
      ))}
    </div>
  );
}
