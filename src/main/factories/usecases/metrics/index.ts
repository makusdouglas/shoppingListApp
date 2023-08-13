import {MetricMethods} from '@/domain/usecases';
import {Metrics} from '@/utils';
import {Dimensions} from 'react-native';

export const makeMetrics = (): MetricMethods => {
  const {width, height} = Dimensions.get('window');
  return new Metrics(width, height);
};
