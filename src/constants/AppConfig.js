import _ from 'lodash'

const AppConfig = Object.freeze({
  ENV: process.env.EXPO_PUBLIC_ENV || reportMissing('ENV'),
  API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL || reportMissing('API_BASE_URL'),
  SCREEN_NAME_TO_REDIRECT_IF_AUTHORIZED: 'landing-first',
  isDevEnv() {
    return this.ENV === 'development'
  },
  isProdEnv() {
    return this.ENV === 'production'
  },
})

export default AppConfig;

function reportMissing(envName, defValueToReturn) {
  console.warn(
    `Env variable "${envName}" is missing. ${
      !_.isUndefined(defValueToReturn) ? 'Use default value: ' + defValueToReturn : ''
    }`
  )
}
