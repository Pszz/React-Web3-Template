export interface IRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}