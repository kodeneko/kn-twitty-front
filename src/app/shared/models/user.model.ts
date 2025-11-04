interface TwitterInfo {
  id: string;
  token: string;
  refreshToken: string;
  expiration: number;
}

interface User {
  username: string;
  email: string;
  twitter: TwitterInfo;
  admin: boolean;
}

export type {
  TwitterInfo,
  User
};