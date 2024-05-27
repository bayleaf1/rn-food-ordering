import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class PaymentInfoScreen extends BaseScreen {
    async updateUser(fields={}){
        // await TestUtils.fillFields(fields)
        // await TestUtils.pressButtonById('update')
    }
    async fillCardDetails(){
         const elem = by.id('card_field')
        //  await element(elem).clearText()
         await element(elem).typeText('4242')
        //  await element(elem).typeText(x[1])
    }
}

export default new PaymentInfoScreen('payment_info')
