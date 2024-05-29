import TestToaster from '../TestToaster'
import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class PaymentScreen extends BaseScreen {
  async purchasePlan() {
    await TestUtils.pressButtonById('purchase_plan')
    // await TestToaster.waitVisibleSuccess()
  }

  async purchasePlanWithFreePromocode() {
    await TestUtils.fillFields({ promocode: 'lifetime'})
    await TestUtils.pressButtonById('purchase_plan')
    await TestUtils.pressButtonById('save_card')
    // await TestToaster.waitVisibleSuccess()

  }
}

export default new PaymentScreen('payment')
