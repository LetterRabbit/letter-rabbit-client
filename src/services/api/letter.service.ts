import { api } from 'lib/api';

import {
  type GetLetterResponse,
  type GetLetterUser,
  type GetMail,
  type GetMailBoxResponse,
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

export const getMail = async (params: string) => {
  const { data } = await api.get<GetMail>(`/mailbox/open/${params}`);
  return data;
};

export const postMail = async (
  params: string,
  body: Record<string, string>
) => {
  const { data } = await api.post(`/letter/write?address=${params}`, body);
  return data;
};

export const getUser = async (params: string) => {
  const { data } = await api.get<GetLetterUser>(
    `/letter/open?address=${params}`
  );
  return data;
};
