export type GithubItem = {
  title: string;
  url: string;
  state: string;
  repo: string;
};

type SearchIssue = {
  title: string;
  html_url: string;
  state: string;
  pull_request?: { merged_at: string | null };
  repository_url: string;
};

function repoFromUrl(repositoryUrl: string): string {
  const parts = repositoryUrl.split("/");
  return `${parts.at(-2)}/${parts.at(-1)}`;
}

export async function fetchRecentPullRequests(
  user: string,
  token?: string,
): Promise<GithubItem[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "adhikram-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const url = new URL("https://api.github.com/search/issues");
  url.searchParams.set("q", `author:${user} type:pr is:public`);
  url.searchParams.set("sort", "updated");
  url.searchParams.set("order", "desc");
  url.searchParams.set("per_page", "12");

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) return [];
    const data = (await res.json()) as { items?: SearchIssue[] };
    return (data.items ?? []).map((item) => ({
      title: item.title,
      url: item.html_url,
      state: item.pull_request?.merged_at ? "merged" : item.state,
      repo: repoFromUrl(item.repository_url),
    }));
  } catch {
    return [];
  }
}
