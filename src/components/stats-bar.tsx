export type Stat = {
  value: string;
  label: string;
  helper?: string;
};

type StatsBarProps = {
  stats: Stat[];
  variant?: "dark" | "light";
};

export function StatsBar({ stats, variant = "dark" }: StatsBarProps) {
  return (
    <div
      className={
        variant === "dark"
          ? "stats-bar bg-brand-charcoal text-brand-cream"
          : "stats-bar bg-brand-cream text-brand-charcoal"
      }
    >
      {stats.map((stat) => (
        <div key={stat.label} className="stats-item">
          <span className="stats-value">{stat.value}</span>
          <span className="stats-label">{stat.label}</span>
          {stat.helper ? <span className="stats-helper">{stat.helper}</span> : null}
        </div>
      ))}
    </div>
  );
}

