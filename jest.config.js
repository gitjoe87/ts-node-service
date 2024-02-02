module.exports = {
    preset: 'ts-jest',
    reporters: [ "default", ["jest-junit", { outputDirectory: "test-reports/" } ]],
    testEnvironment: 'node',
    coveragePathIgnorePatterns: [
        "__tests__/util",
        "lambda"
    ],
    testPathIgnorePatterns: [
        "__tests__/util",
        "lambda"
    ],
    coverageDirectory: "test-reports/",
};