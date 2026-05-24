import type {
  Summary,
  SummaryCreateInput,
  SummaryListResponse,
} from "@ronten/shared-types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000";

export async function fetchSummaries(): Promise<SummaryListResponse> {
  const res = await fetch(`${API_BASE}/api/summaries/`, {
    // App Router でデータを毎リクエスト最新に保つ
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch summaries: ${res.status}`);
  }
  return res.json();
}

export async function createSummary(input: SummaryCreateInput): Promise<Summary> {
  const res = await fetch(`${API_BASE}/api/summaries/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    throw new Error(`Failed to create summary: ${res.status}`);
  }
  return res.json();
}
