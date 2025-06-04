export type ApiResponse<T = any> = {
  returnCode: 'SUCCESS' | 'ERROR' | 'UNAUTHORIZED' | 'FORBIDDEN';
  data: T | null;
  message: string;
};

export interface IRecipe {
  _id: string;
  title: string;
  ingredients: string[];
  instructions: string;
  ownerId: string;
  createdAt: Date;
}

export type SessionData = {
  jwt: string;
  preferences: {
    theme: 'light' | 'dark';
    recentRecipes: IRecipe[];
    favoriteRecipes: IRecipe[];
  };
}; 