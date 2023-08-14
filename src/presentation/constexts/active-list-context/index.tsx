import {ActiveListModel} from '@/domain/models';
import {getActiveList, setActiveList} from '@/main/adapter';
import React, {createContext, useCallback, useContext, useEffect} from 'react';

type ActiveListContextData = {
  activeList: ActiveListModel[];
  addList: (activeList: ActiveListModel) => void;
  updateItem: (activeList: ActiveListModel) => void;
  removeItem: (id: string) => void;
};
const ActiveListContext = createContext<ActiveListContextData>(
  {} as ActiveListContextData,
);

export const ActiveListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [list, setList] = React.useState<ActiveListModel[]>([]);

  const updateCachedList = useCallback(
    async (activeList: ActiveListModel[]) => {
      await setActiveList(activeList);
    },
    [],
  );

  const addList = useCallback(
    (activeList: ActiveListModel) => {
      setList(pvValue => {
        const newList = [...pvValue, activeList];
        updateCachedList(newList);
        return newList;
      });
    },
    [updateCachedList],
  );

  const removeItem = useCallback(
    (id: string) => {
      setList(pvValue => {
        const newList = pvValue.filter(item => item.id !== id);
        updateCachedList(newList);
        return newList;
      });
    },
    [updateCachedList],
  );

  const updateItem = useCallback(
    (activeList: ActiveListModel) => {
      setList(pvValue => {
        const newList = pvValue.map(item =>
          item.id === activeList.id ? activeList : item,
        );
        updateCachedList(newList);
        return newList;
      });
    },
    [updateCachedList],
  );

  const loadCachedList = async () => {
    const result = await getActiveList();
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

  return (
    <ActiveListContext.Provider
      value={{activeList: list, addList, updateItem, removeItem}}>
      {children}
    </ActiveListContext.Provider>
  );
};

export const useActiveList = () => {
  const context = useContext(ActiveListContext);
  if (!context) {
    throw new Error('useActiveList must be used within an ActiveListProvider');
  }
  return context;
};
