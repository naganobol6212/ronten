export const metadata = {
  title: "ronten - 3行要約",
  description: "What / Why / So What で論点を整理する",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
