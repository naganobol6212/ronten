import type { Summary } from "@ronten/shared-types";

// Phase 2 で /api/summaries から実データ取得に置き換える
const mockSummaries: Summary[] = [
  {
    id: 1,
    what: "モノレポ化を完了した",
    why: "TS フロントと Django API で型を共有したかった",
    so_what: "API のスキーマ変更が Web 側コンパイル時に検出できる",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>ronten - 3行要約</h1>
      <p>What / Why / So What で論点を整理する</p>
      <ul>
        {mockSummaries.map((s) => (
          <li key={s.id}>
            <strong>{s.what}</strong>
            <br />
            <small>
              {s.why} → {s.so_what}
            </small>
          </li>
        ))}
      </ul>
    </main>
  );
}
