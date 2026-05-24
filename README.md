# ronten

What / Why / So What で論点を整理する 3行要約アプリ。
**pnpm + Turborepo によるモノレポ構成** で Django API と Next.js Web を 1 リポジトリで開発する。

## 構成

```
ronten/
├── apps/
│   ├── api/                 # Django 5 + DRF (Python 3.11, uv 管理)
│   └── web/                 # Next.js 15 + React 19 (TypeScript)
├── packages/
│   └── shared-types/        # API と Web で共有する TypeScript 型
├── package.json             # pnpm workspaces ルート
├── pnpm-workspace.yaml
└── turbo.json               # Turborepo タスク定義
```

## 必要ツール

| ツール | バージョン | 用途 |
|---|---|---|
| Node.js | 22+ | Web / ワークスペース管理 |
| pnpm | 10+ | パッケージマネージャ |
| Python | 3.11+ | API |
| uv | 0.8+ | Python 依存管理 |

## セットアップ

```bash
# Node 側
pnpm install

# Python 側
cd apps/api && uv sync && cd ../..

# DB マイグレーション
pnpm --filter @ronten/api run migrate

# 管理ユーザ作成
cd apps/api && uv run python manage.py createsuperuser
```

## よく使うコマンド

```bash
# 全アプリの dev サーバを並列起動
pnpm dev

# api だけ起動 (http://localhost:8000)
pnpm --filter @ronten/api run dev

# web だけ起動 (http://localhost:3000)
pnpm --filter @ronten/web run dev

# 全 workspace の lint / type-check (Turborepo がキャッシュしてくれる)
pnpm lint
```

## モノレポ採用の理由

1. **型の単一情報源** - `packages/shared-types` が API レスポンスの shape を定義し、
   Django / Next.js の両方が同じ定義を参照。API 変更時の漏れをコンパイル時に検出。
2. **Turborepo キャッシュ** - 変更が無い workspace のタスクは実行スキップ。
   CI 時間を大幅に短縮できる。
3. **アトミックな PR** - API のフィールド追加と Web 側の表示を 1 つの PR で完結できる。

## Phase 1 で学んだこと

- **モノレポの 2 層構造** (`apps/` 実行物 + `packages/` 共有部品) は Turborepo 流のデファクト
- pnpm の `workspace:*` プロトコルがワークスペース内リンクを自動生成
- Next.js の `transpilePackages` で内部 TS パッケージを直接 import 可能（ビルド不要）
- `@scope/name` 形式の命名で衝突回避と所属を明示
- Turborepo の `dependsOn: ["^build"]` が依存先パッケージのビルド順序を自動解決
- `>>> FULL TURBO` (全キャッシュヒット) を体感: 3 タスク 45ms

## Phase ロードマップ

- [x] Phase 0: Django プロジェクト雛形
- [x] Phase 1: モノレポ化 + `Summary` モデル + Django admin
- [ ] Phase 2: DRF で `/api/summaries/` を公開 + Next.js から fetch
- [ ] Phase 3: 認証 (Django allauth or NextAuth)
- [ ] Phase 4: OpenAPI スキーマから shared-types 自動生成へ移行
