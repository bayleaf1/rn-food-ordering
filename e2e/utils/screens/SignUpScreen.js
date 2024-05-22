import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class SignUpScreen extends BaseScreen {

    async signUp(credetials){
        await TestUtils.fillFields(credetials)
        await TestUtils.pressButtonById('sign_up')
    }  
}

export default new SignUpScreen('sign_up')
