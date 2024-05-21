const axios = require('axios')

const instance = axios.create({ baseURL: 'http://localhost:3000',  headers: {'x-test': 'true'} })

const BackEnd = {
  async eraseUserWithRelatedByEmail(email) {
    await instance.delete('/api/users/erase-with-related/' + email)
  },
}

export default BackEnd;
