import TestUtils from './TestUtils'

const TestTabs = {
  async navigateToUserScreen() {
    await TestUtils.pressByIdAtIndex('user_tab_button')
  },
  async userButtonContainsUserName(fName, lName) {
    await TestUtils.expectVisibleByIdAtIndex(fName + '_' + lName + '_username')
  },
}

export default TestTabs
