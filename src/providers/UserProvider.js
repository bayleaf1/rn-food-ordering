import React, { useEffect, useMemo, useState } from 'react'
import { useStorageState } from '../libs/Storage'
import { useAppLoadingProvider } from './AppLoadingProvider'
import Go from '@libs/Navigation/Go'
import AppConfig from '@constants/AppConfig'
import { fetchBackend } from '@libs/Api'
import endpoints from '@constants/endpoints'
import { NullUser, User, UserManager } from '@libs/UserManager'
import { useSessionProvider } from './SessionProvider'
import { update } from 'react-spring'

const Context = React.createContext({
  updateUserFromBackEndResponse: ()=>'',
  user: new NullUser()
})

// This hook can be used to access the user info.
export const useUserProvider = () => React.useContext(Context)

function UserProvider(props) {
  const [user, setUser] = useState(new NullUser())

  const { jwt } = useSessionProvider()

  useEffect(() => {
      fetchBackend({
        endpoint: endpoints.userProfile,
        jwt,
        onSuccess: ({ data }) => {
          setUser( new User( data))
        },
        onError: ({ status, error, message }) => {
          if (status === 401) signOut()

        },
      })
  }, [jwt])

  return (
    <Context.Provider
      value={{
        user,
        updateUserFromBackEndResponse: (d)=>setUser(new User(d))
      }}
    >
      {!user.isNull() && props.children}
    </Context.Provider>
  )
}

export default UserProvider
