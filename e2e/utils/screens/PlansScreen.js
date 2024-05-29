import TestDialog from '../TestDialog'
import TestToaster from '../TestToaster'
import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class PlansScreen extends BaseScreen {
    async selectLitePlan(){
        await TestUtils.pressButtonById('lite_plan')
    }
    async selectEasePlan(){
        await TestUtils.pressButtonById('ease_plan')
    }
    async showsActiveLitePlan(){
        await TestUtils.expectVisibleById('with_subscription_for_lite_plan')
        await TestUtils.expectVisibleById('without_subscription_for_ease_plan')
    }
    async showsActiveEasePlan(){
        await TestUtils.expectVisibleById('with_subscription_for_ease_plan')
        await TestUtils.expectVisibleById('without_subscription_for_lite_plan')
    }
    async cancelSubscription(){
        await TestUtils.pressButtonById('cancel_subscription')
        await TestDialog.confirm()
        // await TestToaster.waitVisibleSuccess()
    }
    async showsNoOneActivePlan(){
        await TestUtils.expectVisibleById('without_subscription_for_lite_plan')
        await TestUtils.expectVisibleById('without_subscription_for_ease_plan')
    }
}

export default new PlansScreen('plans')
