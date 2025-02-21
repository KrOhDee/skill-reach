const jestConfig = {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {},
  testEnvironment: 'node',
};

export default jestConfig;
