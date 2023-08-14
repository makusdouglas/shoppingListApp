import {ListTemplateModel} from '@/domain/models';
import {makeAsyncStorageAdapter} from '@/main/factories/cache';

export const setListTemplateList = async (
  list: ListTemplateModel[],
): Promise<void> => {
  await makeAsyncStorageAdapter().set('@template-lists', JSON.stringify(list));
};

export const getListTemplateList = async (): Promise<ListTemplateModel[]> => {
  const result = await makeAsyncStorageAdapter().get('@template-lists');
  const lists: ListTemplateModel[] = JSON.parse(JSON.stringify(result)) ?? [];
  return lists;
};
