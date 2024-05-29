import TestUtils from './TestUtils'

const TestDialog = {
  async confirm() {
    await TestUtils.pressButtonById('confirm_dialog')
  },
  async cancel() {
    await TestUtils.pressButtonById('cancel_dialog')
  },
}

export default TestDialog
