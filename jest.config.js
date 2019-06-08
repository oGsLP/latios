module.exports = {
  moduleFileExtensions: ["js", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testRegex: 'spec.js$',
  testURL: "http://localhost/",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  collectCoverage: true,
  coverageDirectory: "tests/unit/coverage",
  collectCoverageFrom: [
    "src/**/*.{vue}",
    "!**src/assets/**",
    "!**/node_modules/**",
    "!**src/App.vue**"
  ],
  coverageReporters: ["json", "lcov", "text", "text-summary", "clover", "html"]
};

