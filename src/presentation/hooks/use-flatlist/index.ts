import {useMemo} from 'react';

export type IUserFlatList = {
  data: IFlatListItem[];
  keys: number[];
};

export function useFlatList(
  data: IFlatListItem[],
  deps?: any[],
): IUserFlatList {
  const list = useMemo(() => {
    const items: IFlatListItem[] = data;

    const keys: number[] = [];
    items.map((item, index) => item.isTitle && keys.push(index));

    return {
      data: items,
      keys,
    };
  }, [data, deps]);

  return list;
}
