

const TestDevice = {
  async screenshot(name = 'debug') {
    await device.takeScreenshot(name)
  },

  async reloadReactNativeToResetState(){
    await device.reloadReactNative()
  },

  async launchAppAsUnauthorized() {
    return device.launchApp({
      url: 'exp://192.168.18.79:8081?authTokenStrategy=clear',
    })
  },
}

export default TestDevice
