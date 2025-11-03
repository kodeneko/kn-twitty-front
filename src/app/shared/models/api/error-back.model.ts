interface ErrorBack {
  code: string,
  path: string;
  timestamp: string;
  nest: string;
  message: string;
  stack: string;
}

export type {
  ErrorBack
}