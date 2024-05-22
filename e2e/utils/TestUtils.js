const TestUtils = {
  expectVisibleById: async (id) => expect(element(by.id(id))).toBeVisible(),
  expectVisibleByIdAtIndex: async (id, index=0) => expect(element(by.id(id)).atIndex(index)).toBeVisible(),
  pressById: async (id) => element(by.id(id)).tap(),
  pressByIdAtIndex: async (id, index=0) => element(by.id(id)).atIndex(index).tap(),
  pressButtonById: async (id) => element(by.id(id+'_button')).tap(),
  waitToBeVisibleById: async (id, timeout = 3000) =>
    waitFor(element(by.id(id)))
      .toBeVisible()
      .withTimeout(timeout),
  fillFields: async (fieldsRegister) => {
    let fields = Object.entries(fieldsRegister)
    for (const x of fields) await element(by.id(x[0])).typeText(x[1])
  },
}

export default TestUtils
