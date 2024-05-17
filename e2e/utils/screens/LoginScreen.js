import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')


class LoginScreen extends BaseScreen {

  async navigateToForgotPasswordScreen() {
    return TestUtils.pressById('forgot_password_button')
  }
}

export default new LoginScreen('login')
