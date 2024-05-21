const axios = require('axios')
const { parsed } = require('dotenv').config({ path: './.env.test' })

const baseURL = parsed.EXPO_PUBLIC_API_BASE_URL
const instance = axios.create({ baseURL, headers: { 'x-test': 'true' } })

const BackEnd = {
  async eraseUserWithRelatedByEmail(email) {
    await instance.delete('/api/users/erase-with-related/' + email)
  },
}

export default BackEnd
