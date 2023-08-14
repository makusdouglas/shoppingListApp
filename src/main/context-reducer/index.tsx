import {ActiveListProvider} from '@/presentation/constexts/active-list-context';
import {TemplateListProvider} from '@/presentation/constexts/template-list-context';
import React from 'react';

export const ContextReducer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const providers = [
    ActiveListProvider,
    TemplateListProvider,
    // up to down order is important (the first provider will be the last to wrap the children)
  ];

  return providers.reduce((previous, Provider) => {
    return <Provider>{previous}</Provider>;
  }, children);
};
