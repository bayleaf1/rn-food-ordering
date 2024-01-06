import { useFontsProvider } from '@providers/FontsProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import { useEffect, useMemo } from 'react'
export { ErrorBoundary } from 'expo-router'

function ProvidersLoadingWatcher({ children, onAllProvidersLoaded = () => null }) {
  const { providerIsLoaded: fonts } = useFontsProvider()
  const { providerIsLoaded: session } = useSessionProvider()
  const { providerIsLoaded: translation } = useTranslationProvider()
  let loaders = useMemo(() => [fonts, session, translation], [fonts, session, translation])

  let content = useMemo(() => (loaders.every(Boolean) ? children : null), [loaders])

  useEffect(() => {
    if (content) onAllProvidersLoaded()
  }, [content])

  return content
}

export default ProvidersLoadingWatcher
