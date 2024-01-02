import React, { useMemo } from 'react'
import PrimaryStack from '../../../libs/Navigation/PrimaryStack'
import { Redirect, Slot } from 'expo-router'
import { useSessionProvider } from '../../../providers/SessionProvider'
import { Text } from 'react-native'
import Screens from '../../../libs/Navigation/ScreenList'

let value = true
export default function AuthorizedLayout() {
  const { isSignedOut, isLoading } = useSessionProvider()

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (false) {
    return <Text tw="mt-20">Loading...</Text>
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  // if (true) {
  //   // On web, static rendering will stop here as the user is not authenticated
  //   // in the headless Node process that the pages are rendered in.
  //   return <Redirect href="sign-in" />
  // }

  // console.log(`isSignedOut:`, isSignedOut);
  if (isSignedOut) return <Redirect href={Screens.singIn} />

  // This layout can be deferred because it's not the root layout.
  return (
    <PrimaryStack initialRouteName="home" screenOptions={{ headerShown: false }}>
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
