import {MetricMethods} from '@/domain/usecases';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export class Metrics implements MetricMethods {
  private width: number;
  private height: number;
  private guidelineBaseWidth = 375;
  private guidelineBaseHeight = 812;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  public horizontalScale(size: number): number {
    return (this.width / this.guidelineBaseWidth) * size;
  }

  public verticalScale(size: number): number {
    return (this.height / this.guidelineBaseHeight) * size;
  }

  public moderateScale(size: number, factor = 0.5): number {
    return size + (this.horizontalScale(size) - size) * factor;
  }
}

export {horizontalScale, verticalScale, moderateScale};
