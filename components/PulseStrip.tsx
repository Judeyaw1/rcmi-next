const dots = [
  { cx: 4, cy: 12, fill: "#C2102E" },
  { cx: 20, cy: 6, fill: "#8F0B22" },
  { cx: 36, cy: 18, fill: "#F0B7C0" },
  { cx: 52, cy: 12, fill: "#C2102E" },
  { cx: 68, cy: 4, fill: "#4A5490" },
  { cx: 84, cy: 20, fill: "#C2102E" },
  { cx: 100, cy: 10, fill: "#8F0B22" },
  { cx: 116, cy: 14, fill: "#F0B7C0" },
  { cx: 132, cy: 8, fill: "#4A5490" },
  { cx: 148, cy: 16, fill: "#C2102E" },
];

export default function PulseStrip() {
  return (
    <div className="flex h-11.5 items-center overflow-hidden border-t border-line-light bg-navy-deep">
      <div className="flex animate-scroll-x gap-12 pl-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <svg key={i} viewBox="0 0 160 24" className="h-5 w-auto shrink-0">
            {dots.map((d, j) => (
              <circle key={j} cx={d.cx} cy={d.cy} r={2.2} fill={d.fill} />
            ))}
          </svg>
        ))}
      </div>
    </div>
  );
}
