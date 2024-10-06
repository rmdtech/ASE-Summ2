module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest" // Use babel-jest to transform JSX and modern JavaScript
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/Tests/Mocks/fileMock.js" // Mock static assets like images
    },
    testEnvironment: "jsdom", // Set the test environment to mimic the browser
};
