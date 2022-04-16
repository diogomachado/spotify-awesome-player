module.exports = {
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    collectCoverageFrom: [
        "<rootDir>/components/**/*.js",
        "<rootDir>/service/**/*.js",
    ],
};
