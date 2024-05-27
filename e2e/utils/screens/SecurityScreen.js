import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class SecurityScreen extends BaseScreen {
  async changePassword(currentPassword, newPassword) {
    await TestUtils.fillFields({ currentPassword, newPassword, repeatedNewPassword: newPassword })
    await TestUtils.pressButtonById('update')
  }
}

export default new SecurityScreen('security')
