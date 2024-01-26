import _ from 'lodash'

export const GLOBAL_CONFIG = Object.freeze({
  ENV: process.env.EXPO_PUBLIC_ENV || reportMissing('ENV'),
  API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL || reportMissing('API_BASE_URL'),
})

export const isDevEnv = () => GLOBAL_CONFIG.ENV === 'development'

export const isProdEnv = () => GLOBAL_CONFIG.ENV === 'production'

function reportMissing(envName, defValueToReturn) {
  console.warn(
    `Env variable "${envName}" is missing. ${
      !_.isUndefined(defValueToReturn) ? 'Use default value: ' + defValueToReturn : ''
    }`
  )
}
