import React, { useEffect, useMemo, useState } from 'react'
import { useStorageState } from '../libs/Storage'

const AuthContext = React.createContext({
  providerIsLoaded: false,
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
        providerIsLoaded: !isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default SessionProvider
