import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createMailBox,
  getLetterList,
  getMail,
  getMailBox,
  getUser,
  postMail,
} from '../api/letter.service';

export const useArticlesQuery = (params: any) =>
  useQuery(['getArticles', { params }], async () => {
    const res = await getLetterList(params);
    return res;
  });

/**
 * TODO: param을 mutation과 일치하게 수정해서 함수 Higher Ordering 하면 더 좋을 듯
 * 우선 지금은 body만 받고 onSuccess처리, onError 처리추가 시에 위와 같은 방식으로 수정
 * 2023.05.16
 */

export const useCreateMailBoxMutation = () => {
  return useMutation((body: Record<string, any>) => createMailBox(body));
};

export const useOpenMailBox = (query: string) =>
  useQuery(['getMailBox'], async () => {
    const res = await getMailBox(query);
    return res;
  });

export const useOpenMail = (params: string) =>
  useQuery(['getMail'], async () => {
    const res = await getMail(params);
    return res;
  });

export const useCreateMailMutation = (params: string) => {
  return useMutation((body: Record<string, any>) => postMail(params, body));
};

export const useGetUser = (params: string) => {
  return useQuery(['getUser'], async () => {
    const res = await getUser(params);
    return res;
  });
};
