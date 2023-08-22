import {EditListScreen} from '@/presentation/screens';
import {ParamListBase, RouteProp, useRoute} from '@react-navigation/native';

type RouteParams = RouteProp<ParamListBase, 'edit-list'>;

export const MakeEditListScreen: React.FC = () => {
  const {params} = useRoute<RouteParams>();
  const {id} = params;
  return <EditListScreen listId={id} />;
};
