import _ from 'lodash'

const AppConfig = Object.freeze({
  ENV: process.env.EXPO_PUBLIC_ENV || reportMissing('ENV'),
  API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL || reportMissing('API_BASE_URL'),
  SCREEN_NAME_TO_REDIRECT_IF_AUTHORIZED: process.env.EXPO_PUBLIC_SCREEN_NAME_TO_REDIRECT_IF_AUTHORIZED || 'payment-info',
  TEST: process.env.EXPO_PUBLIC_TEST,
  AUTH_TOKEN_NAME: 'jwt_token',
  SHOW_SPLASH_SCREEN: process.env.EXPO_PUBLIC_SHOW_SPLASH_SCREEN  === '1',
  STRIPE_PKEY: process.env.EXPO_PUBLIC_STRIPE_PKEY || '',
  CONSOLER_LEVEL: Number(process.env.EXPO_PUBLIC_CONSOLER_LEVEL || '0'),
  isDevEnv() {
    return this.ENV === 'development'
  },
  isProdEnv() {
    return this.ENV === 'production'
  },
  isTestEnv(){
    return this.ENV === 'test'
  },
  testEnvOrOther(whenIsTest, otherwise){
     return this.isTestEnv() ? whenIsTest : otherwise
  }
})

export default AppConfig;

function reportMissing(envName, defValueToReturn) {
  console.warn(
    `Env variable "${envName}" is missing. ${
      !_.isUndefined(defValueToReturn) ? 'Use default value: ' + defValueToReturn : ''
    }`
  )
}
