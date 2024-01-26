import { createContext, useCallback, useContext, useMemo, useState } from 'react'
export { ErrorBoundary } from 'expo-router'

let Context = createContext({
  isAppLoaded: false,
})

export const useAppLoadingProvider = () => useContext(Context)

function AppLoadingProvider({ children }) {
  const [modules, setModules] = useState({
    fontsProvider: false,
    sessionProvider: false,
    // screenOrientationProvider: false,
    translationProvider: false,
  })

  let isAppLoaded = useMemo(() => Object.values(modules).every(Boolean), [modules])

  const setProviderAsLoaded = useCallback(
    (providerPrefix = '') => setModules((s) => ({ ...s, [providerPrefix + 'Provider']: true })),
    []
  )

  return (
    <Context.Provider
      value={{
        isAppLoaded,
        setProviderAsLoaded,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default AppLoadingProvider
