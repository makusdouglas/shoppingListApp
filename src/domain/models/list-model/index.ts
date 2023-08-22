export type ListModel = {
  id: string;
  name: string;
  items: ListItemModel[];
  type: 'normal' | 'priced';
  done?: boolean;
};

export type ListItemModel = {
  id: string;
  name: string;
  done?: boolean;
  quantity?: number;
  price?: number;
};
