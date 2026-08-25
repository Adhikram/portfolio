export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type ContributionWeek = (ContributionDay | null)[];

export type MonthLabel = {
  index: number;
  label: string;
};

export type ContributionYear = {
  year: number;
  total: number;
  caption: string;
  days: ContributionDay[];
  weeks: ContributionWeek[];
  months: MonthLabel[];
};

type JogDay = { date: string; count: number; level?: number };
type JogResponse = {
  total?: Record<string, number>;
  contributions?: JogDay[];
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const API = "https://github-contributions-api.jogruber.de/v4";

function toDay(d: JogDay): ContributionDay {
  return {
    date: d.date,
    count: d.count,
    level: d.level ?? (d.count <= 0 ? 0 : d.count <= 2 ? 1 : d.count <= 6 ? 2 : d.count <= 12 ? 3 : 4),
  };
}

export function buildWeeks(days: ContributionDay[]): ContributionWeek[] {
  if (!days.length) return [];
  const first = new Date(`${days[0].date}T00:00:00Z`);
  const pad = first.getUTCDay();
  const padded: ContributionWeek = [
    ...Array.from({ length: pad }, () => null),
    ...days,
  ];
  const weeks: ContributionWeek[] = [];
  for (let i = 0; i < padded.length; i += 7) {
    const week = padded.slice(i, i + 7);
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

export function monthLabels(weeks: ContributionWeek[]): MonthLabel[] {
  const labels: MonthLabel[] = [];
  let lastMonth = -1;
  weeks.forEach((week, index) => {
    const day = week.find((cell) => cell !== null);
    if (!day) return;
    const month = new Date(`${day.date}T00:00:00Z`).getUTCMonth();
    if (month === lastMonth) return;
    if (labels.length && index - labels[labels.length - 1].index < 2) return;
    labels.push({ index, label: MONTHS[month] });
    lastMonth = month;
  });
  return labels;
}

function sortDays(days: ContributionDay[]) {
  return [...days].sort((a, b) => a.date.localeCompare(b.date));
}

function packYear(
  year: number,
  total: number,
  caption: string,
  days: ContributionDay[],
): ContributionYear {
  const sorted = sortDays(days);
  const weeks = buildWeeks(sorted);
  return {
    year,
    total,
    caption,
    days: sorted,
    weeks,
    months: monthLabels(weeks),
  };
}

async function fetchJog(user: string, query: string): Promise<JogResponse | null> {
  try {
    const res = await fetch(`${API}/${user}${query}`);
    if (!res.ok) return null;
    return (await res.json()) as JogResponse;
  } catch {
    return null;
  }
}

export async function fetchContributionHistory(
  user: string,
): Promise<ContributionYear[]> {
  const currentYear = new Date().getUTCFullYear();
  const [all, last] = await Promise.all([
    fetchJog(user, ""),
    fetchJog(user, "?y=last"),
  ]);

  const byYear = new Map<number, ContributionDay[]>();
  for (const day of all?.contributions ?? []) {
    const year = Number(day.date.slice(0, 4));
    const list = byYear.get(year) ?? [];
    list.push(toDay(day));
    byYear.set(year, list);
  }

  const years = [...byYear.keys()].sort((a, b) => b - a);
  if (!years.includes(currentYear)) years.unshift(currentYear);

  return years.map((year) => {
    if (year === currentYear && last?.contributions?.length) {
      const days = last.contributions.map(toDay);
      const total =
        last.total?.lastYear ?? days.reduce((n, d) => n + d.count, 0);
      return packYear(year, total, "in the last year", days);
    }
    const days = byYear.get(year) ?? [];
    const total =
      all?.total?.[String(year)] ?? days.reduce((n, d) => n + d.count, 0);
    return packYear(year, total, `in ${year}`, days);
  });
}
