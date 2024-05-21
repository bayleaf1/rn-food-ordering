import { BaseScreen } from './BaseScreen'

const { default: TestUtils } = require('../TestUtils')

class HomeScreen extends BaseScreen {

     async signOut() {
       await TestUtils.pressById('sign_out_button')
     }
}

export default new HomeScreen('home')
