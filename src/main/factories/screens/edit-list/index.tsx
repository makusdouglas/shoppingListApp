import {PublicRoutes} from '@/main/router/public';
import {EditListScreen} from '@/presentation/screens';
import {RouteProp, useRoute} from '@react-navigation/native';

type RouteParams = RouteProp<PublicRoutes, 'edit-list'>;

export const MakeEditListScreen: React.FC = () => {
  const {params} = useRoute<RouteParams>();
  const {id} = params;
  return <EditListScreen listId={id} />;
};
