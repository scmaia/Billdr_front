const localForage = jest.createMockFromModule("localForage");

localForage.getItem = jest.fn();
localForage.setItem = jest.fn();

module.exports = localForage;
