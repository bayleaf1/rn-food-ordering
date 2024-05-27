import TestToaster from '../TestToaster'
import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class PaymentInfoScreen extends BaseScreen {
    async saveCardInfo(){
        await TestUtils.pressButtonById('save_card')
        await TestToaster.waitVisibleSuccess()
    }
}

export default new PaymentInfoScreen('payment_info')
