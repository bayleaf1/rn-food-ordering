const TestUtils = {
  expectVisibleById: async (id) => expect(element(by.id(id))).toBeVisible(),
  pressById: async (id) => element(by.id(id)).tap(),
  waitToBeVisibleById: async (id, timeout = 3000) =>
    waitFor(element(by.id(id)))
      .toBeVisible()
      .withTimeout(timeout),
}

export default TestUtils
