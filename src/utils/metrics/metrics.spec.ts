import {faker} from '@faker-js/faker';
import {Dimensions} from 'react-native';
import {Metrics} from '.';

type SystemUnderTestTypes = {
  systemUnderTest: Metrics;
  metrics: {
    width: number;
    height: number;
    guidelineBaseWidth: number;
    guidelineBaseHeight: number;
  };
};

const makeSystemUnderTest = (): SystemUnderTestTypes => {
  const {width, height} = Dimensions.get('window');
  const [guidelineBaseWidth, guidelineBaseHeight] = [375, 812];
  const systemUnderTest = new Metrics(width, height);

  return {
    systemUnderTest,
    metrics: {
      width,
      height,
      guidelineBaseWidth,
      guidelineBaseHeight,
    },
  };
};

describe('Metrics', () => {
  test('Should scale(horizontal) the input size according to the device width and guideline base width', () => {
    const value = Number(faker.random.numeric(3));
    const {systemUnderTest, metrics} = makeSystemUnderTest();
    const newValue = systemUnderTest.horizontalScale(value);
    const expectedValue = (metrics.width / metrics.guidelineBaseWidth) * value;
    expect(newValue).toBe(expectedValue);
  });
  test('Should scale(vertical) the input size according to the device height and guideline base height', () => {
    const value = Number(faker.random.numeric(3));
    const {systemUnderTest, metrics} = makeSystemUnderTest();
    const newValue = systemUnderTest.verticalScale(value);
    const expectedValue =
      (metrics.height / metrics.guidelineBaseHeight) * value;
    expect(newValue).toBe(expectedValue);
  });
  test('Should scale the input size according the device metrics and factor of 0.5 value', () => {
    const value = Number(faker.random.numeric(3));
    const {systemUnderTest} = makeSystemUnderTest();
    const newValue = systemUnderTest.moderateScale(value);
    const factor = 0.5;
    const expectedValue =
      value + (systemUnderTest.horizontalScale(value) - value) * factor;
    expect(newValue).toBe(expectedValue);
  });
});
