import React, { useMemo } from 'react'
import PrimaryStack from '../../libs/Navigation/PrimaryStack'
import { FullScreenLayout } from '../../layouts/BaseLayout'
import { Redirect, Slot } from 'expo-router'
import { useSession } from '../../providers/SessionProvider'
import { Text, View } from 'react-native'
// export { ErrorBoundary } from 'expo-router';

// export function ErrorBoundary(props) {
//   return (
//     <View style={{ flex: 1, backgroundColor: 'blue' }}>
//       <Text>{props.error.message}</Text>
//       <Text onPress={props.retry}>Try Again?</Text>
//       <Link asChild href={'/'}>
//         <Text onPress={props.retry}>Go home</Text>
//       </Link>
//     </View>
//   )
// }

let value = true
export default function AppLayout() {
  const { session, isLoading } = useSession()

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

  // if (session) return <Redirect href="/" />

  // if(redir) return redir;

  // This layout can be deferred because it's not the root layout.
  return (
    <FullScreenLayout bgColor={'gray'}>
      <PrimaryStack initialRouteName="sign-in" screenOptions={{ headerShown: false }}>
        <PrimaryStack.Screen
          name="sign-in"
          options={{
            gestureEnabled: true,
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            headerShown: false,
          }}
        />
        <PrimaryStack.Screen
          name="sign-up"
          options={{
            gestureEnabled: true,
            presentation: 'modal',
            cardStyle: { backgroundColor: 'transparent' },
            headerShown: false,
          }}
        />
        <PrimaryStack.Screen
          name="password-recover"
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
