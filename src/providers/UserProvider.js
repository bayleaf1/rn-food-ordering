import endpoints from '@constants/endpoints'
import { NullUser, User } from '@libs/UserManager'
import React, { useEffect, useState } from 'react'
import { useApiProvider } from './ApiProvider'

const Context = React.createContext({
  updateUserFromBackEndResponse: () => '',
  user: new NullUser(),
})

export const useUserProvider = () => React.useContext(Context)

function UserProvider(props) {
  const [user, setUser] = useState(new NullUser())

  const { get } = useApiProvider()

  useEffect(() => {
    get({
      endpoint: endpoints.userProfile,
      onSuccess: ({ data }) => {
        setUser(new User(data))
      },
    })
  }, [])

  return (
    <Context.Provider
      value={{
        user,
        updateUserFromBackEndResponse: (d) => setUser(new User(d)),
      }}
    >
      {!user.isNull() && props.children}
    </Context.Provider>
  )
}

export default UserProvider
