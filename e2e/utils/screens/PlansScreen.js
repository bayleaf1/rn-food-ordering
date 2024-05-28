import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class PlansScreen extends BaseScreen {
    async selectLitePlan(){
        await TestUtils.pressButtonById('lite_plan')
    }
    async selectEasePlan(){
        await TestUtils.pressButtonById('ease_plan')
    }
    async showsActiveEasePlan(){
        await TestUtils.expectVisibleById('subscription_with_ease_plan')
    }
    async showsActiveLitePlan(){
        await TestUtils.expectVisibleById('subscription_with_lite_plan')
    }
}

export default new PlansScreen('plans')
