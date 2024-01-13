import Writing from '@components/Writing/Writing';
import Go from '@libs/Navigation/Go';
import PrimaryStack from '@libs/Navigation/PrimaryStack'
import Screens from '@libs/Navigation/ScreenList'
import { useSessionProvider } from '@providers/SessionProvider'
import { Redirect } from 'expo-router'
import CustomErrorBoundary from '@components/ErrorBoundary'

export const ErrorBoundary = CustomErrorBoundary

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
