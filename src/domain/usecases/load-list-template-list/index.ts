import {
  ItemTemplateModel,
  ListTemplateModel,
} from '@/domain/models/list-template-model';

export interface LoadListTemplateList {
  load(): Promise<LoadListTemplateList.Model[]>;
}

export namespace LoadListTemplateList {
  export type Model = ListTemplateModel;
  export type Item = ItemTemplateModel;
}
