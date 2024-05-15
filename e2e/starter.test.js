describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    // await expect(element(by.text('Register'))).toBeVisible();
    await waitFor(element(by.id('welcome'))).toBeVisible().withTimeout(10000);
    await expect(element(by.id('register'))).toBeVisible()
    await element(by.id('register')).tap();
    await waitFor(element(by.id('reg'))).toBeVisible().withTimeout(10000);
    const imagePath = await device.takeScreenshot('opened general section2');
    
    // await expect(element(by.text('Register'))).toBeVisible();
   
    // await expect(element(by.text('Lalalal'))).toHaveText('Lalalal')
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
