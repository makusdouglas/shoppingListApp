import {ReturnListCotext} from '@/presentation/constexts';
import {useContext} from 'react';

const ListContext = ReturnListCotext();

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useList must be used within an ListProvider');
  }
  return context;
};
