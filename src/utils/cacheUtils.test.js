const localForage = require("localForage");
const { saveToCache, getFromCache } = require("./cacheUtils");

const TEST_KEY = "test-key";
const TEST_VALUE = "test-value";

jest.mock("localForage");

describe("cache utils", () => {
  it("saves to cache", () => {
    saveToCache(TEST_KEY, TEST_VALUE);
    expect(localForage.setItem.mock.calls[0][0]).toBe(TEST_KEY);
    expect(localForage.setItem.mock.calls[0][1]).toBe(TEST_VALUE);
  });

  it("retreives from cache", () => {
    getFromCache(TEST_KEY);
    expect(localForage.getItem.mock.calls[0][0]).toBe(TEST_KEY);
  });
});
