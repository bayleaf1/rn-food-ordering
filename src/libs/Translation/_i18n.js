import i18n from 'i18next'
import _ from 'lodash'
import { initReactI18next } from 'react-i18next'
import en from './en'
import ro from './ro'
import { isProdEnv } from '@config/globalConfig'

export const AppLanguages = Object.freeze({
  EN: 'en',
  RO: 'ro',
})
export const DEFAULT_LANGUAGE = AppLanguages.EN

if(!isProdEnv()) verifyCompletnessOfTranslationsOrThrow(en, [ro])

const resources = {
  en: {
    translation: en.value,
  },
  ro: {
    translation: ro.value,
  },
}

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3', // an error is thrown that something is wrong with plurals' resolver
  fallbackLng: ['en'],
  lng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false, // React already escapes values
  },
})

export default i18n

function verifyCompletnessOfTranslationsOrThrow(baseTranslation, otherTranslations) {

  otherTranslations.forEach((tr) =>
    verifyAndThrowPropertiesPresenceOrPropertiesWithDifferentType(
      baseTranslation.value,
      tr.value,
      tr.degubLabel
    )
  )

  function verifyAndThrowPropertiesPresenceOrPropertiesWithDifferentType(
    baseTranslation = {},
    anotherTranslation = {},
    anotherTranslationName = ''
  ) {
    verifyTranslations(baseTranslation, anotherTranslation, [anotherTranslationName])

    function verifyTranslations(base, another, path) {
      base = _.cloneDeep(base)
      another = _.cloneDeep(another)

      verifyPresenceOfPropertiesInTranslationsAtCurrentLevel()

      verifyEveryPropertyOfBaseTranslation()

      function verifyPresenceOfPropertiesInTranslationsAtCurrentLevel() {
        let baseKeys = Object.keys(base).sort()
        let anotherKeys = Object.keys(another).sort()
        let missing = _.difference(baseKeys, anotherKeys)

        if (missing.length) throw new Error(messageWhenPropsAre('missing', missing))

        let superflous = _.difference(anotherKeys, baseKeys)

        if (superflous.length) throw new Error(messageWhenPropsAre('superflous', superflous))

        function messageWhenPropsAre(action, props) {
          return `Verified translation at path "${stringifyPath(
            path
          )}" has ${action} folowing prop(s): ${props.join(', ')}`
        }
      }

      function verifyEveryPropertyOfBaseTranslation() {
        Object.keys(base).forEach((key) => {
          let baseValue = base[key]
          let anotherValue = another[key]

          let currentPath = path.concat(key)
          let typeB = typeof baseValue
          let typeA = typeof anotherValue
          if (typeB !== typeA) throw new Error(messageWhenPropsAreOfDifferentType())

          if (typeB === 'object') verifyTranslations(baseValue, anotherValue, currentPath)

          function messageWhenPropsAreOfDifferentType() {
            return `Verified translation at "${stringifyPath(
              currentPath
            )}" is of type "${typeA}" while base translation is of type "${typeB}"`
          }
        })
      }

      function stringifyPath(p) {
        return p.join('->')
      }
    }
  }
}
