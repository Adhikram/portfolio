export type ContributionDay = {
  date: string;
  count: number;
};

export type ContributionYear = {
  year: number;
  total: number;
  days: ContributionDay[];
};

type JogDay = { date: string; count: number };
type JogResponse = {
  total?: Record<string, number>;
  contributions?: JogDay[];
};

export async function fetchContributionYear(
  user: string,
  year: number,
): Promise<ContributionYear | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${user}?y=${year}`,
    );
    if (!res.ok) return null;
    const data = (await res.json()) as JogResponse;
    const days = (data.contributions ?? []).map((d) => ({
      date: d.date,
      count: d.count,
    }));
    const total = data.total?.[String(year)] ?? days.reduce((n, d) => n + d.count, 0);
    return { year, total, days };
  } catch {
    return null;
  }
}
