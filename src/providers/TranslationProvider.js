import { useLocales } from 'expo-localization'
import { createContext, useCallback, useContext, useEffect, useMemo } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { useStorageState } from '@libs/Storage'
import i18nConfigs, { AppLanguages, DEFAULT_LANGUAGE } from '@libs/Translation/_i18n'
import _ from 'lodash'

let Context = createContext({
  t: () => '',
  setLocaleAndSaveToStorage: () => null,
  providerHasLoaded: false,
  AvailableLanguages: AppLanguages,
})
export const useTranslationProvider = () => useContext(Context)

function TranslationProvider({ children }) {
  const [[isLoading, language], setLanguage] = useStorageState('app-language')

  const { t, i18n } = useTranslation()
  const locales = useLocales()
  let systemLanguage = _.get(locales, '[0].languageCode', DEFAULT_LANGUAGE)

  const setLanguageAndSaveToStorage = useCallback(
    (lang) => setLanguage(lang || DEFAULT_LANGUAGE),
    [setLanguage]
  )

  useEffect(() => {
    function setSystemLanguageToStorageIfNotWasSavedBefore() {
      let firstOpeningWhenThereIsNoLanguageSavedInStorage = !isLoading && !language
      if (firstOpeningWhenThereIsNoLanguageSavedInStorage) setLanguage(systemLanguage)
    }
    setSystemLanguageToStorageIfNotWasSavedBefore()
  }, [systemLanguage, isLoading, language])

  useEffect(() => {
    function updateLanguageInAppWhenItChangesInStorage() {
      if (language) i18n.changeLanguage(language)
    }
    updateLanguageInAppWhenItChangesInStorage()
  }, [i18n, language])

  return (
    <I18nextProvider i18n={i18nConfigs}>
      <Context.Provider
        value={{
          providerHasLoaded: isLoading,
          t,
          setLanguageAndSaveToStorage,
          AvailableLanguages: AppLanguages,
        }}
      >
        {children}
      </Context.Provider>
    </I18nextProvider>
  )
}

export default TranslationProvider
