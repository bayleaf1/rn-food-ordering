import endpoints from '@constants/endpoints'
import { fetchBackend } from '@libs/Api'
import { NullUser, User } from '@libs/UserManager'
import React, { useEffect, useState } from 'react'
import { useSessionProvider } from './SessionProvider'

const Context = React.createContext({
  updateUserFromBackEndResponse: ()=>'',
  user: new NullUser()
})

export const useUserProvider = () => React.useContext(Context)

function UserProvider(props) {
  const [user, setUser] = useState(new NullUser())

  const { jwt, signOut } = useSessionProvider()

  useEffect(() => {
      fetchBackend({
        endpoint: endpoints.userProfile,
        jwt,
        onSuccess: ({ data }) => {
          setUser( new User( data))
        },
        onError: ({ status}) => {
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
