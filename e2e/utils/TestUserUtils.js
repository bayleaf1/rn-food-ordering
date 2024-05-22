const casual = require('casual')

const TestUserUtils = {
  generateEmail() {
    return casual.uuid.slice(0, 5) + '@m.com'
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
        firstName: casual.first_name.slice(0, 3),
        lastName: casual.last_name.slice(0, 3),
        address: casual.address,
        zipCode: casual.zip(4),
        phoneNumber: '1234567890',
        unit: '1234',
        ...overrides,

    }
  }
  
  
}

export default TestUserUtils
