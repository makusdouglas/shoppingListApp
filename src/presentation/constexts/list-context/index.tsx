import {ListItemModel, ListModel} from '@/domain/models';
import {getLists, setLists} from '@/main/adapter';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

interface ListContextData {
  list: ListModel[];
  createList(list: ListModel): void;
  updateList(list: ListModel): void;
  removeList(id: string): void;
  appendItemToList(data: {id: string; item: ListItemModel}): void;
  updateItemInList(data: {id: string; newItem: ListItemModel}): void;
  removeItemfromList(data: {id: string; itemId: string}): void;
}

const ListContext = createContext<ListContextData>({} as ListContextData);

export const ReturnListCotext = () => ListContext;

export const ListProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [list, setList] = React.useState<ListModel[]>([]);

  const updateCachedList = useCallback(async (lists: ListModel[]) => {
    await setLists(lists);
  }, []);

  const addList = useCallback(
    (list: ListModel) => {
      setList(pvValue => {
        const newList = [list, ...pvValue];
        updateCachedList(newList);
        return newList;
      });
    },
    [updateCachedList],
  );

  const appendItemToList: ListContextData['appendItemToList'] = useCallback(
    ({id, item}) => {
      setList(pvValue => {
        const newList = pvValue.map(list => {
          if (list.id === id) {
            return {
              ...list,
              items: [item, ...list.items],
            };
          }
          return list;
        });
        updateCachedList(newList);
        return newList;
      });
    },
    [],
  );

  const updateItemInList: ListContextData['updateItemInList'] = useCallback(
    ({id, newItem}) => {
      setList(pvValue => {
        const newList = pvValue.map(list => {
          if (list.id === id) {
            return {
              ...list,
              items: list.items.map(item => {
                if (item.id === newItem.id) {
                  return newItem;
                }
                return item;
              }),
            };
          }
          return list;
        });
        updateCachedList(newList);
        return newList;
      });
    },
    [],
  );

  const removeItemfromList: ListContextData['removeItemfromList'] = useCallback(
    ({id, itemId}) => {
      setList(pvValue => {
        const newList = pvValue.map(list => {
          if (list.id === id) {
            return {
              ...list,
              items: list.items.filter(item => item.id !== itemId),
            };
          }
          return list;
        });
        updateCachedList(newList);
        return newList;
      });
    },
    [],
  );

  const updateList = useCallback(
    (list: ListModel) => {
      setList(pvValue => {
        const newList = pvValue.map(item =>
          item.id === list.id ? list : item,
        );
        updateCachedList(newList);
        return newList;
      });
    },
    [updateCachedList],
  );

  const removeList = useCallback(
    (id: string) => {
      setList(pvValue => {
        const newList = pvValue.filter(item => item.id !== id);
        updateCachedList(newList);
        return newList;
      });
    },
    [updateCachedList],
  );

  const loadCachedList = async () => {
    const result = await getLists();
    if (typeof result === 'string') {
      const cachedList = JSON.parse(result);
      if (!cachedList) return;
      setList(cachedList);
      return;
    }
    setList(result);
  };

  useEffect(() => {
    loadCachedList();
  }, []);

  const value: ListContextData = useMemo(() => {
    return {
      list,
      createList: addList,
      updateList,
      removeList,
      appendItemToList,
      updateItemInList,
      removeItemfromList,
    };
  }, [
    list,
    addList,
    updateList,
    removeList,
    appendItemToList,
    updateItemInList,
    removeItemfromList,
  ]);

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};
