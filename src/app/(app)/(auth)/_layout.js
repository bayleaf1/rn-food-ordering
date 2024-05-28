import { Screens } from '@libs/Navigation/ScreenList'
import { useSessionProvider } from '@providers/SessionProvider'
import UserProvider from '@providers/UserProvider'
import { Redirect, Stack } from 'expo-router'

export default function AuthorizedLayout() {
  const { isSignedOut } = useSessionProvider()

  if (isSignedOut) return <Redirect href={Screens['sign-in']()} />

  return (
    <UserProvider>
     <Stack/>
    </UserProvider>
  )
}
