import _ from 'lodash'

export const ENV_VARS = Object.freeze({
  ENV: process.env.EXPO_PUBLIC_ENV || reportMissing('ENV'),
})

export const isDevEnv = () => ENV_VARS === 'development'

export const isProdEnv = () => ENV_VARS === 'production'

function reportMissing(envName, defValueToReturn) {
  console.warn(
    `Env variable "${envName}" is missing. ${
      !_.isUndefined(defValueToReturn) ? 'Use default value: ' + defValueToReturn : ''
    }`
  )
}
