const casual = require('casual')
const res  =  require('dotenv').parse('../../.env.test')

const TestUserUtils = {
  generateEmail() {
    return casual.uuid.slice(0, 5) + '@m.c'
  },
  getRegistrationFields() {
    return {
      email: this.generateEmail(),
      firstName: casual.first_name.slice(0, 3),
      lastName: casual.last_name.slice(0, 3),
      password: 'qwer1234',
    }
  },
}

export default TestUserUtils
