module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@stores/(.*)$': '<rootDir>/src/stores/$1',
    '^@layout/(.*)$': '<rootDir>/src/layout/$1',
    '^@home/(.*)$': '<rootDir>/src/modules/home/$1',
    '^@about/(.*)$': '<rootDir>/src/modules/about/$1',
    '^@login/(.*)$': '<rootDir>/src/modules/login/$1'
  }
};
