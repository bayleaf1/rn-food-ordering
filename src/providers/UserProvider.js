import endpoints from '@constants/endpoints'
import { NullUser, User } from '@dto/User.js'
import React, { useEffect, useState } from 'react'
import { useApiProvider } from './ApiProvider'

const Context = React.createContext({
  updateUserFromBackEndResponse: () => '',
  user: new NullUser(),
  refetchUser: () => '',
  loading: false
})

export const useUserProvider = () => React.useContext(Context)

function UserProvider(props) {
  const [user, setUser] = useState(new NullUser())
  const [loading, setLoading] = useState(false)

  const { get } = useApiProvider()

  const fetchUser = useCallback(
    (props = { setLoading: () => '', extraOnSuccess: () => '' }) => {
      get({
        endpoint: endpoints.userProfile,
        onSuccess: ({ data }) => {
          setUser(new User(data))
          props.extraOnSuccess && props.extraOnSuccess()
        },
        setLoading: (value) => {
          const passed = props.setLoading || function () {}
          passed(value)
          setLoading(value)
        },
      })
    },
    [get]
  )

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Context.Provider
      value={{
        user,
        refetchUser: fetchUser,
        updateUserFromBackEndResponse: (d) => setUser(new User(d)),
        loading,
      }}
    >
      {user.isValidToRenderApp() && props.children}
    </Context.Provider>
  )
}

export default UserProvider
