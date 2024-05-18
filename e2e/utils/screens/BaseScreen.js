import TestUtils from "../TestUtils"

export class BaseScreen {
    constructor(screenName = ''){
        this.screenName = screenName
        this.postConstructor()
    }
    postConstructor(){}

    async waitToBeVisible() {
      return TestUtils.waitToBeVisibleById(this.screenName + '_screen')
    }
  }