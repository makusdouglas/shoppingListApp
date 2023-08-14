import {AsyncStorageAdapter} from '@/infra/cache/async-storage-adapter';
import {faker} from '@faker-js/faker';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve()),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
}));

type SystemUnderTestType = {
  systemUnderTest: AsyncStorageAdapter;
};

const makeSystemUnderTest = (): SystemUnderTestType => {
  const systemUnderTest = new AsyncStorageAdapter();

  return {
    systemUnderTest,
  };
};

describe('AsyncStorageAdapter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Should call AsyncStorage.setItem with correct values', async () => {
    const {systemUnderTest} = makeSystemUnderTest();
    const value = faker.lorem.word();

    const key = faker.database.column();
    await systemUnderTest.set(key, value);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value),
    );
  });

  test('Should call AsyncStorage.removeItem if value is null', async () => {
    const {systemUnderTest} = makeSystemUnderTest();

    const key = faker.database.column();
    await systemUnderTest.set(key, null);

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(key);
  });

  test('Should call AsyncStorage.getItem with correct value', async () => {
    const {systemUnderTest} = makeSystemUnderTest();
    const value = faker.lorem.word();
    const key = faker.database.column();

    await systemUnderTest.set(key, value);
    await systemUnderTest.get(key);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(key);
  });

  test('Should call AsyncStorage.clear correctly', async () => {
    const {systemUnderTest} = makeSystemUnderTest();

    await systemUnderTest.clear();
    expect(AsyncStorage.clear).toHaveBeenCalled();
  });
});
