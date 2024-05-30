const casual = require('casual')

const AUTOMATED_TEST_DOMAIN = '@xtest.com'
const TestUserUtils = {
  generateEmail() {
    return casual.uuid.slice(0, 5) + AUTOMATED_TEST_DOMAIN
  },
  getRegistrationFields() {
    return {
      email: this.generateEmail(),
      firstName: casual.first_name.slice(0, 3),
      lastName: casual.last_name.slice(0, 3),
      password: 'qwer1234',
    }
  },
  getUpdatedFields(overrides={}) {
    return {
        email: this.generateEmail(),
        address: casual.address.slice(0,4),
        zipCode: casual.zip(3).slice(0,3),
        phone: '1234567890',
        unit: casual.zip(3).slice(0,3),
        ...overrides,

    }
  }
  
  
}

export default TestUserUtils
