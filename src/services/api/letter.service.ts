import { api } from 'lib/api';

import {
  type GetLetterResponse,
  GetMailBoxResponse,
  type MockParamType,
} from 'services/types/letter';

export const getLetterList = async (params: MockParamType) => {
  const { data } = await api.get<GetLetterResponse>(`/letters/${params}`);
  return data;
};

export const createMailBox = async (body: Record<string, string>) => {
  const { data } = await api.post(`/mailbox/create`, body);
  return data;
};

export const getMailBox = async (query: string) => {
  const { data } = await api.get<GetMailBoxResponse>('/mailbox/open' + query);
  return data;
};
