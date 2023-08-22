import {ListItemModel, ListModel} from '@/domain/models';

export interface LoadList {
  load: () => Promise<LoadList.Model[]>;
}
export declare namespace LoadList {
  type Model = ListModel;
  type Item = ListItemModel;
}
