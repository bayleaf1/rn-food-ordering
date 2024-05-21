import React, { useEffect, useMemo, useState } from 'react'
import { useStorageState } from '../libs/Storage'
import { useAppLoadingProvider } from './AppLoadingProvider'
import Go from '@libs/Navigation/Go'
import AppConfig from '@constants/AppConfig'

const AuthContext = React.createContext({
  // signIn: () => null,
  signOut: () => null,
  signInAndRedirectToHomeScreen: ()=>null,
  // session: null,llllllpppppoiuytr
  isSignedIn: false,
  isSignedOut: true,
  isLoading: false,
})

// This hook can be used to access the user info.
export const useSessionProvider = () => React.useContext(AuthContext)

function SessionProvider(props) {
  const [[isLoading, jwtToken], setJwtToken, removeValue] = useStorageState(AppConfig.AUTH_TOKEN_NAME)
  const isSignedIn = useMemo(() => !!jwtToken, [jwtToken])
  const isSignedOut = useMemo(() => !isSignedIn, [isSignedIn])
  let { setProviderAsLoaded } = useAppLoadingProvider()

  // removeValue()
  useEffect(() => {
    if (!isLoading) setProviderAsLoaded('session')
  }, [isLoading])

  const signIn = (token = '') => setJwtToken(token)
  const signInAndRedirectToHomeScreen = (token) => {
    signIn(token);
    Go.toScreen('home')
  }
  return (
    <AuthContext.Provider
      value={{
        signInAndRedirectToHomeScreen,
        signOut: () => {
          setJwtToken(null)
        },
        isSignedIn,
        isSignedOut,
        // session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default SessionProvider
