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

export interface GetMail {
  id: number;
  username: string;
  desc: string;
  created_at: string;
  total_list: number[];
}

export type MailBox = {
  id: number;
  username: string;
  desc: string;
  created_at: string;
};

export interface GetLetterUser {
  message: CheckUser;
}

export type CheckUser = {
  user_name: string;
  mailbox_position_id: number;
  address: string;
  mailbox_name: string;
};
