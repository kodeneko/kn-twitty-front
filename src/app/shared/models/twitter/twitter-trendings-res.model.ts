import { TwitterError } from "./twitter-error.model";

interface TwitterTrendingsData {
  trend_name: string;
  tweet_count: number;
}

interface TwitterTrendingsRes {
  data?: TwitterTrendingsData[];
  errors?: TwitterError[];
}

export type { TwitterTrendingsRes };
