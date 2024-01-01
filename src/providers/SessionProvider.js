import React, { useState } from 'react'
// import { useStorageState } from './useStorageState'

const AuthContext = React.createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
})

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext)
  //   if (process.env.NODE_ENV !== 'production') {
  //     if (!value) {
  //       throw new Error('useSession must be wrapped in a <SessionProvider />');
  //     }
  //   }

  return value
}
const init = [[false, 'xxx'], () => null]
function SessionProvider(props) {
  let [session, setSession] = useState(null);
  // const [[isLoading, session], setSession] = init
  //TODO complete useStorageState
  //   const [[isLoading, session], setSession] = useStorageState('session');
  let isLoading = false;
  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession('xxx')
        },
        signOut: () => {
          setSession(null)
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default SessionProvider
