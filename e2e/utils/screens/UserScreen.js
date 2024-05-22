import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class UserScreen extends BaseScreen {
    async updateUser(fields={}){
        await TestUtils.fillFields(fields)
        await TestUtils.pressButtonById('update')
    }
}

export default new UserScreen('user')
