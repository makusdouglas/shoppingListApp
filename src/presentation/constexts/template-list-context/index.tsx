import {ListTemplateModel} from '@/domain/models';
import {getListTemplateList, setListTemplateList} from '@/main/adapter';
import React, {createContext, useCallback, useContext, useEffect} from 'react';

type TemplateListContextData = {
  templateList: ListTemplateModel[];
  addToList: (templateList: ListTemplateModel) => void;
  removeFromList: (id: string) => void;
  updateList: (templateList: ListTemplateModel) => void;
};

const TemplateListContext = createContext<TemplateListContextData>(
  {} as TemplateListContextData,
);

export const TemplateListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [templateList, setTemplateList] = React.useState<ListTemplateModel[]>(
    [],
  );
  const addToList = (templateList: ListTemplateModel) => {
    setTemplateList(pvValue => {
      const newList = [templateList, ...pvValue];
      updateCachedList(newList);
      return newList;
    });
  };

  const removeFromList = (id: string) => {
    setTemplateList(pvValue => {
      const newList = pvValue.filter(item => item.id !== id);
      updateCachedList(newList);
      return newList;
    });
  };

  const updateList = (templateList: ListTemplateModel) => {
    setTemplateList(pvValue => {
      const newList = pvValue.map(item =>
        item.id === templateList.id ? templateList : item,
      );
      updateCachedList(newList);
      return newList;
    });
  };

  const loadCachedList = async () => {
    const result = await getListTemplateList();
    if (typeof result === 'string') {
      const cachedList = JSON.parse(result);
      if (!cachedList) return;
      setTemplateList(cachedList);
      return;
    }
    setTemplateList(result);
  };

  const updateCachedList = useCallback(
    async (templateList: ListTemplateModel[]) => {
      await setListTemplateList(templateList);
    },
    [],
  );

  useEffect(() => {
    loadCachedList();
  }, []);

  return (
    <TemplateListContext.Provider
      value={{templateList, addToList, removeFromList, updateList}}>
      {children}
    </TemplateListContext.Provider>
  );
};

export const useTemplateList = () => {
  const context = useContext(TemplateListContext);
  return context;
};
