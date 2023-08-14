import {ActiveListModel} from '@/domain/models';
import {makeAsyncStorageAdapter} from '@/main/factories/cache';

export const setActiveList = async (list: ActiveListModel[]): Promise<void> => {
  await makeAsyncStorageAdapter().set('@active-lists', JSON.stringify(list));
};

export const getActiveList = async (): Promise<ActiveListModel[]> => {
  const result = await makeAsyncStorageAdapter().get('@active-lists');
  const lists: ActiveListModel[] = result ? JSON.parse(result) : [];
  return lists;
};
