import React, { useMemo, useState } from 'react'
import { useStorageState } from '../libs/Storage'
// import { useStorageState } from './useStorageState'

const AuthContext = React.createContext({
  signIn: () => null,
  signOut: () => null,
  // session: null,
  isSignedIn: false,
  isSignedOut: true,
  isLoading: false,
})

// This hook can be used to access the user info.
export function useSessionProvider() {
  const value = React.useContext(AuthContext)
  //   if (process.env.NODE_ENV !== 'production') {
  //     if (!value) {
  //       throw new Error('useSessionProvider must be wrapped in a <SessionProvider />');
  //     }
  //   }

  return value
}

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
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default SessionProvider
