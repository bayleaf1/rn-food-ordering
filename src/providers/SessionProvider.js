import React, { useEffect, useMemo, useState } from 'react'
import { useStorageState } from '../libs/Storage'
import { useAppLoadingProvider } from './AppLoadingProvider'

const AuthContext = React.createContext({
  signIn: () => null,
  signOut: () => null,
  // session: null,llllllpppppoiuytr
  isSignedIn: false,
  isSignedOut: true,
  isLoading: false,
})

// This hook can be used to access the user info.
export const useSessionProvider = () => React.useContext(AuthContext)

function SessionProvider(props) {
  const [[isLoading, jwtToken], setJwtToken] = useStorageState('jwt-token')
  const isSignedIn = useMemo(() => !!jwtToken, [jwtToken])
  const isSignedOut = useMemo(() => !isSignedIn, [isSignedIn])
  let { setProviderAsLoaded } = useAppLoadingProvider()

  useEffect(() => {
    if (!isLoading) setProviderAsLoaded('session')
  }, [isLoading])

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          setJwtToken('someJwt')
        },
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
