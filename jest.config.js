module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
    "**/__tests__/**/*.(ts|tsx|js)",
    "**/?(*.)+(spec|test).(ts|tsx|js)"
  ]
};

