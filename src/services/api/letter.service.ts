import { api } from 'lib/api';

import {
  type GetLetterResponse,
  type MockParamType,
} from 'services/types/letter';

export const getLetterList = async (params: MockParamType) => {
  const { data } = await api.get<GetLetterResponse>(`/letters/${params}`);
  return data;
};
