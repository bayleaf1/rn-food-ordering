import PrimaryStack from '@libs/Navigation/PrimaryStack'
import Screens from '@libs/Navigation/ScreenList'
import { useSessionProvider } from '@providers/SessionProvider'
import { Redirect } from 'expo-router'

export default function AuthorizedLayout() {
  const { isSignedOut } = useSessionProvider()

  if (isSignedOut) return <Redirect href={Screens.singIn} />

  return (
    <PrimaryStack
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <PrimaryStack.Screen name="home" />
      <PrimaryStack.Screen name="settings" />
    </PrimaryStack>
  )
}
