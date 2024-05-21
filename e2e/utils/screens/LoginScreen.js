import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class LoginScreen extends BaseScreen {
  async navigateToForgotPasswordScreen() {
    return TestUtils.pressById('forgot_password_button')
  }
  
  async navigateToSignUpScreen() {
    return TestUtils.pressById('sign_up_button')
  }

  async signIn(email = '123tes', password = '123') {
    await TestUtils.fillFields({ email, password })
    await TestUtils.pressButtonById('login')
  }
}

export default new LoginScreen('login')
