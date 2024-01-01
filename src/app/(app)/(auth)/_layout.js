import React, { useMemo } from 'react'
import PrimaryStack from '../../../libs/Navigation/PrimaryStack'
import { FullScreenLayout } from '../../../layouts/BaseLayout'
import { Redirect, Slot } from 'expo-router'
import { useSessionProvider } from '../../../providers/SessionProvider'
import { Text } from 'react-native'

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

  console.log(`isSignedOut:`, isSignedOut);
  if (isSignedOut) return <Redirect href="/sign-in" />

  // This layout can be deferred because it's not the root layout.
  return (
    // <Slot />
    <FullScreenLayout bgColor={'gray'}>
      {/* <Slot /> */}
      <PrimaryStack screenOptions={{ headerShown: false }}>
        <PrimaryStack.Screen name="index" />
        <PrimaryStack.Screen name="second" />
        <PrimaryStack.Screen
          name="modal"
          options={{
            gestureEnabled: true,
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            headerShown: false,
          }}
        />
      </PrimaryStack>
    </FullScreenLayout>
  )
}
// export default function _layout() {
//   return (
//     <FullScreenLayout bgColor={'gray'}>
//       <PrimaryStack screenOptions={{headerShown: false}}>
//         <PrimaryStack.Screen name="index" />
//         <PrimaryStack.Screen name="second" />
//         {/* <PrimaryStack.Screen
//         name="modal"
//         options={{
//           gestureEnabled: true,
//           presentation: 'modal',
//           cardStyle: { backgroundColor: 'transparent' },
//           headerShown: false,
//         }}
//       /> */}
//       </PrimaryStack>
//     </FullScreenLayout>
//   )
// }
