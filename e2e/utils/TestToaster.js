import TestUtils from './TestUtils'

const TestToaster = {
  async waitVisibleSuccess() {
    await TestUtils.waitToBeVisibleById('success_toast', 5000)
  },
  async waitVisibleError() {
    await TestUtils.waitToBeVisibleById('error_toast', 5000)
  },
  async waitVisible(testID='inexistent_to_fail') {
    await TestUtils.waitToBeVisibleById(testID + 'toast', 5000)
  },
 
}

export default TestToaster
