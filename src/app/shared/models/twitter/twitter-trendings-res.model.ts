import { TwitterError } from "./twitter-error.model";

type TwitterTrendingsData = {
  trend_name: string;
  tweet_count: number;
};

type TwitterTrendingsRes = {
  data?: TwitterTrendingsData[];
  errors?: TwitterError[];
};

export type { TwitterTrendingsRes };
