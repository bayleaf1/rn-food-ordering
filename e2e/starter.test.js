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
const { default: PlansScreen } = require('./utils/screens/PlansScreen')
const { default: PaymentScreen } = require('./utils/screens/PaymentScreen')

describe('Example', () => {
  const fields = TestUserUtils.getRegistrationFields()
  const updatedFields = TestUserUtils.getUpdatedFields()
  const newPassword = 'uio392io'

  beforeAll(async () => {
    await TestDevice.launchAppAsUnauthorized()
  })

  beforeEach(async () => {
    await TestDevice.reloadReactNativeToResetState()
  })

  afterAll(async () => {
    await BackEnd.eraseUserWithRelatedByEmail(fields.email)
    await BackEnd.eraseUserWithRelatedByEmail(updatedFields.email)
  })


  it('get lite subscription', async () => {
    await SignInScreen.toBeVisible()
    await SignInScreen.navigateToSignUpScreen()
    await SignUpScreen.toBeVisible()

    await SignUpScreen.signUp(fields)
    await UserScreen.toBeVisible()
    await UserScreen.updateUser(updatedFields)

    await TestTabs.navigateToPlansScreen()
    await PlansScreen.toBeVisible();

    await PlansScreen.selectLitePlan()
    await PaymentScreen.toBeVisible()

    await PaymentScreen.purchasePlan()
    await PlansScreen.toBeVisible();
    await PlansScreen.showsActiveLitePlan();

    await PlansScreen.selectEasePlan()
    await PaymentScreen.toBeVisible()
    await PaymentScreen.purchasePlan()
    await PlansScreen.toBeVisible();
    await PlansScreen.showsActiveEasePlan();






    // await SecurityScreen.toBeVisible()

    // await SecurityScreen.changePassword(fields.password, newPassword)
    
    // await TestTabs.navigateToHomeScreen()
    // await HomeScreen.toBeVisible()

    // await HomeScreen.signOut() 
    // await SignInScreen.toBeVisible()

    // await SignInScreen.signIn(updatedFields.email, newPassword)
    // await UserScreen.toBeVisible()

  })

  // it('signup and change password', async () => {
  //   await SignInScreen.toBeVisible()
  //   await SignInScreen.navigateToSignUpScreen()
  //   await SignUpScreen.toBeVisible()

  //   await SignUpScreen.signUp(fields)
  //   await UserScreen.toBeVisible()
  //   await UserScreen.updateUser(updatedFields)


  //   await TestTabs.navigateToSecurityScreen()
  //   await SecurityScreen.toBeVisible()

  //   await SecurityScreen.changePassword(fields.password, newPassword)
    
  //   await TestTabs.navigateToHomeScreen()
  //   await HomeScreen.toBeVisible()

  //   await HomeScreen.signOut() 
  //   await SignInScreen.toBeVisible()

  //   await SignInScreen.signIn(updatedFields.email, newPassword)
  //   await UserScreen.toBeVisible()

  // })

  // it('registers and updates profile', async () => {
  //   await SignInScreen.toBeVisible()
  //   await SignInScreen.navigateToSignUpScreen()
  //   await SignUpScreen.toBeVisible()

  //   await SignUpScreen.signUp(fields)
  //   await UserScreen.toBeVisible()
  //   await TestTabs.userButtonContainsUserName(fields.firstName, fields.lastName)

  //   // await TestTabs.navigateToUserScreen()
  //   await UserScreen.toBeVisible()

  //   await UserScreen.updateUser(updatedFields)

  //   await TestTabs.navigateToPaymentInfoScreen()
  //   await PaymentInfoScreen.toBeVisible()

  //   await PaymentInfoScreen.saveCardInfo()

  // })

  //TODO test for outdated jwt
  // it('registers and login', async () => {

  //   await SignInScreen.toBeVisible()
  //   await SignInScreen.navigateToSignUpScreen()
  //   await SignUpScreen.toBeVisible()

  //   await SignUpScreen.signUp(fields)
  //   await HomeScreen.toBeVisible()

  //   await HomeScreen.signOut()
  //   await SignInScreen.toBeVisible()

  //   await SignInScreen.signIn(fields.email, fields.password)
  //   await HomeScreen.toBeVisible()

  //   // await SignInScreen.toBeVisible()
  //   // await TestDevice.screenshot()
  // })

  // it('should have welcome screen', async () => {
  //   // await expect(element(by.text('Register'))).toBeVisible();
  //   await SignInScreen.toBeVisible()

  //   // await TestUtils.fillFields({ email: '123testx', password: '123' })

  //   await SignInScreen.tryToLogin()

  //   await HomeScreen.toBeVisible()

  //   await TestDevice.screenshot()
  //   // await element(by.id('emailInput')).typeText('test@mail')
  //   // await device.takeScreenshot('opened general section2')
  //   return
  //   await SignInScreen.navigateToForgotPasswordScreen()
  //   await ForgotPasswordScreen.toBeVisible()

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
