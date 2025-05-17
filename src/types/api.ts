export type ApiResponse<T = any> = {
  returnCode: 'SUCCESS' | 'ERROR' | 'UNAUTHORIZED' | 'FORBIDDEN';
  data: T | null;
  message: string;
};

export type SessionData = {
  jwt: string;
  preferences: {
    theme: 'light' | 'dark';
    recentRecipes: string[];
  };
}; 