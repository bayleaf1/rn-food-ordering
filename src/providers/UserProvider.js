import endpoints from '@constants/endpoints'
import { NullUser, User } from '@dto/User.js'
import React, { useEffect, useState } from 'react'
import { useApiProvider } from './ApiProvider'

const Context = React.createContext({
  updateUserFromBackEndResponse: () => '',
  user: new NullUser(),
  refetchUser: ()=>''
})

export const useUserProvider = () => React.useContext(Context)

function UserProvider(props) {
  const [user, setUser] = useState(new NullUser())

  const { get } = useApiProvider()

  const fetchUser = useCallback((props={setLoading:()=>'', extraOnSuccess: ()=>''})=>{
    get({
      setLoading: props.setLoading || function(){},
      endpoint: endpoints.userProfile,
      onSuccess: ({ data }) => {
        // console.log(`data:`, data);
        setUser(new User(data))
        props.extraOnSuccess && props.extraOnSuccess()
      },
    })
  }, [get])

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Context.Provider
      value={{
        user,
        refetchUser:fetchUser,
        updateUserFromBackEndResponse: (d) => setUser(new User(d)),
      }}
    >
      {user.isValidToRenderApp() && props.children}
    </Context.Provider>
  )
}

export default UserProvider
