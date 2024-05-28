import TestUtils from './TestUtils'

const TestTabs = {
  async navigateToUserScreen() {
    await TestUtils.pressByIdAtIndex('user_tab_button')
  },
  async navigateToPaymentInfoScreen() {
    await TestUtils.pressByIdAtIndex('payment_info_tab_button')
  },
  async navigateToSecurityScreen() {
    await TestUtils.pressByIdAtIndex('security_tab_button')
  },
  async navigateToHomeScreen() {
    await TestUtils.pressByIdAtIndex('home_tab_button')
  },
  async navigateToPlansScreen() {
    await TestUtils.pressByIdAtIndex('plans_tab_button')
  },
  
  async userButtonContainsUserName(fName, lName) {
    await TestUtils.expectVisibleByIdAtIndex(fName + '_' + lName + '_username')
  },
}

export default TestTabs
