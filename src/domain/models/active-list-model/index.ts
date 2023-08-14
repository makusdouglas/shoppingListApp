export type ActiveListModel = {
  id: string;
  templateId: string;
  name: string;
  items: ItemModel[];
  type: 'normal' | 'priced';
};

export type ItemModel = {
  id: string;
  templateItemId: string;
  name: string;
  done?: boolean;
  quantity?: number;
  price?: number;
};
