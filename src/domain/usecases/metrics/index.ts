export interface MetricMethods {
  horizontalScale(size: number): number;
  verticalScale(size: number): number;
  moderateScale(size: number, factor?: number): number;
}
