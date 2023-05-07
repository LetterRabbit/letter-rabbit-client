import { useQuery } from '@tanstack/react-query';

import { getLetterList } from '../api/letter.service';

export const useArticlesQuery = (params: any) =>
  useQuery(['getArticles', { params }], async () => {
    const res = await getLetterList(params);
    return res;
  });
