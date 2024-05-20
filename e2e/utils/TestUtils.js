const TestUtils = {
  expectVisibleById: async (id) => expect(element(by.id(id))).toBeVisible(),
  pressById: async (id) => element(by.id(id)).tap(),
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
