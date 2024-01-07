import { Redirect, Stack } from 'expo-router'
import { Text } from 'react-native'
import PrimaryStack from '@libs/Navigation/PrimaryStack'
import Screens from '@libs/Navigation/ScreenList'
import { useSessionProvider } from '@providers/SessionProvider'

export default function AuthorizedLayout() {
  const { isSignedOut, isLoading } = useSessionProvider()

  if (isSignedOut) return <Redirect href={Screens.singIn} />
  // return <Stack>
  //   <Stack.Screen name="home" options={{orientation: 'all'}} />
  //   <Stack.Screen name="settings" />
  // </Stack>
  return (
    <PrimaryStack initialRouteName="home" screenOptions={{orientation: 'all', headerShown: false }}>
      <PrimaryStack.Screen name="home" />
      <PrimaryStack.Screen name="settings" />
      {/*   <PrimaryStack.Screen
          name="modal"
          options={{
            gestureEnabled: true,
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            headerShown: false,
          }}
        /> */}
    </PrimaryStack>
  )
}
