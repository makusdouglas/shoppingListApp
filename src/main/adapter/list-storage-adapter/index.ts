import {ListModel} from '@/domain/models';
import {makeAsyncStorageAdapter} from '@/main/factories/cache';

const listStorageKey = '@lists';

export const setLists = async (list: ListModel[]): Promise<void> => {
  await makeAsyncStorageAdapter().set(listStorageKey, JSON.stringify(list));
};

export const getLists = async (): Promise<ListModel[]> => {
  const result = await makeAsyncStorageAdapter().get(listStorageKey);
  const lists: ListModel[] = result ? JSON.parse(result) : [];
  return lists;
};
