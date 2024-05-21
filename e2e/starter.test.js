const { default: LoginScreen } = require('./utils/screens/LoginScreen')
const { default: ForgotPasswordScreen } = require('./utils/screens/ForgotPasswordScreen')
const { default: TestUtils } = require('./utils/TestUtils')
const { default: TestDevice } = require('./utils/TestDevice')
const { default: HomeScreen } = require('./utils/screens/HomeScreen')
const { default: SignUpScreen } = require('./utils/screens/SignUpScreen')

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
    await TestDevice.clearAuthToken()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('registers and login', async () => {
    const credentials = {
      email: 'testmobileapp@mail.com',
      firstName: 'Mihai',
      lastName: 'Mircea',
      password: 'qwer1234',
    }
    await LoginScreen.waitToBeVisible()
    await LoginScreen.navigateToSignUpScreen()
    await SignUpScreen.waitToBeVisible()

    await SignUpScreen.signUp(credentials)
    await HomeScreen.waitToBeVisible()
    // await TestDevice.screenshot()
  })

  // it('should have welcome screen', async () => {
  //   // await expect(element(by.text('Register'))).toBeVisible();
  //   await LoginScreen.waitToBeVisible()

  //   // await TestUtils.fillFields({ email: '123testx', password: '123' })

  //   await LoginScreen.tryToLogin()

  //   await HomeScreen.waitToBeVisible()

  //   await TestDevice.screenshot()
  //   // await element(by.id('emailInput')).typeText('test@mail')
  //   // await device.takeScreenshot('opened general section2')
  //   return
  //   await LoginScreen.navigateToForgotPasswordScreen()
  //   await ForgotPasswordScreen.waitToBeVisible()

  //   return
  //   await waitFor(element(by.id('welcome')))
  //     .toBeVisible()
  //     .withTimeout(10000)
  //   await expect(element(by.id('register'))).toBeVisible()
  //   await element(by.id('register')).tap()
  //   await waitFor(element(by.id('reg')))
  //     .toBeVisible()
  //     .withTimeout(10000)
  //   const imagePath = await device.takeScreenshot('opened general section2')

  //   // await expect(element(by.text('Register'))).toBeVisible();

  //   // await expect(element(by.text('Lalalal'))).toHaveText('Lalalal')
  // })

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
})
