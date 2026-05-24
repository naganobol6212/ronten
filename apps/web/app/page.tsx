import { fetchSummaries } from "@/lib/api";

export default async function HomePage() {
  const summaries = await fetchSummaries();

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui", maxWidth: 720 }}>
      <h1>ronten - 3行要約</h1>
      <p>What / Why / So What で論点を整理する</p>

      {summaries.length === 0 ? (
        <p style={{ color: "#888" }}>
          まだ要約がありません。Django admin (http://localhost:8000/admin/) または
          POST /api/summaries/ で追加してください。
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {summaries.map((s) => (
            <li
              key={s.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                <strong>What:</strong> {s.what}
              </div>
              <div>
                <strong>Why:</strong> {s.why}
              </div>
              <div>
                <strong>So What:</strong> {s.so_what}
              </div>
              <small style={{ color: "#888" }}>
                {new Date(s.created_at).toLocaleString("ja-JP")}
              </small>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
