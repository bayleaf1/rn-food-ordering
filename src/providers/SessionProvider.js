import React, { useEffect, useMemo, useState } from 'react'
import { useStorageState } from '../libs/Storage'
import { useAppLoadingProvider } from './AppLoadingProvider'
import Go from '@libs/Navigation/Go'
import AppConfig from '@constants/AppConfig'
import { fetchBackend } from '@libs/Api'
import endpoints from '@constants/endpoints'
import { NullUser, User, UserManager } from '@libs/UserManager'

const AuthContext = React.createContext({
  jwt: '',
  signIn: () => null,
  signOut: () => null,
  // signInAndRedirectToHomeScreen: () => null,
  // session: null,llllllpppppoiuytr
  isSignedIn: false,
  isSignedOut: true,
  isLoading: false,
  // user: new NullUser()
})

// This hook can be used to access the user info.
export const useSessionProvider = () => React.useContext(AuthContext)

function SessionProvider(props) {
  const [[isLoading, jwtToken], setJwtToken, removeValue] = useStorageState(
    AppConfig.AUTH_TOKEN_NAME
  )
  const isSignedIn = useMemo(() => !!jwtToken, [jwtToken])
  const isSignedOut = useMemo(() => !isSignedIn, [isSignedIn])
  let { setProviderAsLoaded } = useAppLoadingProvider()

  const [user, setUser] = useState(new NullUser())

  const signOut = () => {
    // console.log("53-36", 'SIGN OUT')
    // removeValue()
    setJwtToken(null)
    // Go.toScreen('login')
  }
  // useEffect(() => {
  //   if (jwtToken) {
  //     fetchBackend({
  //       endpoint: endpoints.userProfile,
  //       jwt: jwtToken,
  //       onSuccess: ({ data }) => {
  //         setUser( new User( data))
  //       },
  //       onError: ({ status, error, message }) => {
  //         if (status === 401) signOut()

  //       },
  //     })
  //   }
  // }, [jwtToken])

  // removeValue()
  useEffect(() => {
    if (!isLoading ) setProviderAsLoaded('session')
  }, [isLoading])

  const signIn = (token = '') => setJwtToken(token)
  
  return (
    <AuthContext.Provider
      value={{
        jwt:jwtToken,
        signIn,
        signOut: () => {
          signOut()
          // setJwtToken(null)
        },
        isSignedIn,
        isSignedOut,
        // user,
        // session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default SessionProvider
