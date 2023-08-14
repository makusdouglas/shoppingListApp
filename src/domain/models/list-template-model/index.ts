export type ListTemplateModel = {
  id: string;
  name: string;
  items: ItemTemplateModel[];
  type: 'normal' | 'priced';
};

export type ItemTemplateModel = {
  id: string;
  name: string;
  quantity?: number;
  price?: number;
};
