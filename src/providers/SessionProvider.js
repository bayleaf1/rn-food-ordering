import AppConfig from '@constants/AppConfig'
import React, { useEffect, useMemo } from 'react'
import { useStorageState } from '../libs/Storage'
import { useAppLoadingProvider } from './AppLoadingProvider'

const AuthContext = React.createContext({
  jwt: '',
  signIn: () => null,
  signOut: () => null,
  isSignedIn: false,
  isSignedOut: true,
  isLoading: false,
})

export const useSessionProvider = () => React.useContext(AuthContext)

function SessionProvider(props) {
  const [[isLoading, jwtToken], setJwtToken] = useStorageState(
    AppConfig.AUTH_TOKEN_NAME
  )
  const isSignedIn = useMemo(() => !!jwtToken, [jwtToken])
  const isSignedOut = useMemo(() => !isSignedIn, [isSignedIn])
  let { setProviderAsLoaded } = useAppLoadingProvider()

  const signOut = () => setJwtToken('')

  useEffect(() => {
    if (!isLoading ) setProviderAsLoaded('session')
  }, [isLoading])

  const signIn = (token = '') => setJwtToken(token)
  
  return (
    <AuthContext.Provider
      value={{
        jwt:jwtToken,
        signIn,
        signOut,
        isSignedIn,
        isSignedOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default SessionProvider
