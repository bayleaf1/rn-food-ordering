const { default: SignInScreen } = require('./utils/screens/SignInScreen')
const { default: ForgotPasswordScreen } = require('./utils/screens/ForgotPasswordScreen')
const { default: TestUtils } = require('./utils/TestUtils')
const { default: TestDevice } = require('./utils/TestDevice')
const { default: HomeScreen } = require('./utils/screens/HomeScreen')
const { default: SignUpScreen } = require('./utils/screens/SignUpScreen')
const { default: UserScreen } = require('./utils/screens/UserScreen')
const { default: PaymentInfoScreen } = require('./utils/screens/PaymentInfoScreen')
const { default: BackEnd } = require('./utils/BackEnd')
const { default: TestUserUtils } = require('./utils/TestUserUtils')
const { default: TestTabs } = require('./utils/TestTabs')
const { default: SecurityScreen } = require('./utils/screens/SecurityScreen')

describe('Example', () => {
  const fields = TestUserUtils.getRegistrationFields()
  const updatedFields = TestUserUtils.getUpdatedFields()
  const newPassword = 'uio392io'

  beforeAll(async () => {
    await TestDevice.launchAppAsUnauthorized()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  afterAll(async () => {
    await BackEnd.eraseUserWithRelatedByEmail(fields.email)
    await BackEnd.eraseUserWithRelatedByEmail(updatedFields.email)
  })

  it('signup and change password', async () => {
    await SignInScreen.waitToBeVisible()
    await SignInScreen.navigateToSignUpScreen()
    await SignUpScreen.waitToBeVisible()

    await SignUpScreen.signUp(fields)
    await UserScreen.waitToBeVisible()
    await UserScreen.updateUser(updatedFields)


    await TestTabs.navigateToSecurityScreen()
    await SecurityScreen.waitToBeVisible()

    await SecurityScreen.changePassword(fields.password, newPassword)
    
    await TestTabs.navigateToHomeScreen()
    await HomeScreen.waitToBeVisible()

    await HomeScreen.signOut() 
    await SignInScreen.waitToBeVisible()

    await SignInScreen.signIn(updatedFields.email, newPassword)
    await UserScreen.waitToBeVisible()

  })

  // it('registers and updates profile', async () => {
  //   await SignInScreen.waitToBeVisible()
  //   await SignInScreen.navigateToSignUpScreen()
  //   await SignUpScreen.waitToBeVisible()

  //   await SignUpScreen.signUp(fields)
  //   await UserScreen.waitToBeVisible()
  //   await TestTabs.userButtonContainsUserName(fields.firstName, fields.lastName)

  //   // await TestTabs.navigateToUserScreen()
  //   await UserScreen.waitToBeVisible()

  //   await UserScreen.updateUser(updatedFields)

  //   await TestTabs.navigateToPaymentInfoScreen()
  //   await PaymentInfoScreen.waitToBeVisible()

  //   await PaymentInfoScreen.saveCardInfo()

  // })

  //TODO test for outdated jwt
  // it('registers and login', async () => {

  //   await SignInScreen.waitToBeVisible()
  //   await SignInScreen.navigateToSignUpScreen()
  //   await SignUpScreen.waitToBeVisible()

  //   await SignUpScreen.signUp(fields)
  //   await HomeScreen.waitToBeVisible()

  //   await HomeScreen.signOut()
  //   await SignInScreen.waitToBeVisible()

  //   await SignInScreen.signIn(fields.email, fields.password)
  //   await HomeScreen.waitToBeVisible()

  //   // await SignInScreen.waitToBeVisible()
  //   // await TestDevice.screenshot()
  // })

  // it('should have welcome screen', async () => {
  //   // await expect(element(by.text('Register'))).toBeVisible();
  //   await SignInScreen.waitToBeVisible()

  //   // await TestUtils.fillFields({ email: '123testx', password: '123' })

  //   await SignInScreen.tryToLogin()

  //   await HomeScreen.waitToBeVisible()

  //   await TestDevice.screenshot()
  //   // await element(by.id('emailInput')).typeText('test@mail')
  //   // await device.takeScreenshot('opened general section2')
  //   return
  //   await SignInScreen.navigateToForgotPasswordScreen()
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
