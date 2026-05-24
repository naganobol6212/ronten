/**
 * Django の summaries.Summary と対応する型。
 * API レスポンスの shape を表す Single Source of Truth として
 * apps/api と apps/web の両方が参照する。
 */
export interface Summary {
  id: number;
  what: string;
  why: string;
  so_what: string;
  created_at: string; // ISO 8601
  updated_at: string;
}

export type SummaryCreateInput = Pick<Summary, "what" | "why" | "so_what">;

/**
 * GET /api/summaries/ のレスポンス型。
 * 現状ページネーションなしなので Summary[] と等価。
 * 将来 DRF の PageNumberPagination を入れたら
 * { count, next, previous, results } 型に差し替える。
 */
export type SummaryListResponse = Summary[];
