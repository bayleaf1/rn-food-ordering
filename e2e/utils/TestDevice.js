const TestDevice = {
  async screenshot(name = 'debug') {
    await device.takeScreenshot(name)
  },
}

export default TestDevice
