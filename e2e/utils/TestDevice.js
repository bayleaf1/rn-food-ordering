// import AppConfig from "@constants/AppConfig"
// import { removeStorageItemAsync } from "@libs/Storage"

import TestUtils from './TestUtils'

const TestDevice = {
  async screenshot(name = 'debug') {
    await device.takeScreenshot(name)
  },
  
  async clearAuthToken() {
    await TestUtils.waitToBeVisibleById('test_actions_toggler')
    await TestUtils.pressById('test_actions_toggler')
    await TestUtils.pressById('auth_token_remover')
    await this.screenshot('toggler open')
    await TestUtils.pressById('test_actions_toggler')
    await this.screenshot('toggler close')

    // return removeStorageItemAsync(AppConfig.AUTH_TOKEN_NAME)
  },
}

export default TestDevice
