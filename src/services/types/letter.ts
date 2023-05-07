export interface GetLetterResponse {
  message: Letter[];
}

export type MockParamType = {
  id: number;
};

export type Letter = {
  id: number;
  username: string;
  description: string;
  created_at: string;
};
