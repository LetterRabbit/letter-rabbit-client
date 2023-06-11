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

export interface GetMailBoxResponse {
  total_count: number;
  result: MailBox[];
}

export type MailBox = {
  id: number;
  username: string;
  description: string;
  created_date: string;
};
