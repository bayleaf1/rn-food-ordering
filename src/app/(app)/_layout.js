import React, { useMemo } from 'react'
import PrimaryStack from '../../libs/Navigation/PrimaryStack'
import { FullScreenLayout } from '../../layouts/BaseLayout'
import { Redirect, Slot } from 'expo-router'
import { useSessionProvider } from '../../providers/SessionProvider'
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

// let value = true
export default function AppLayout() {
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (false) {
    return <Text tw="mt-20">Loading...</Text>
  }

  return (
    <FullScreenLayout bgColor={'gray'}>
      <PrimaryStack initialRouteName="sign-in">
        <PrimaryStack.Screen
          name="sign-in"
          options={{
            gestureEnabled: true,
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />
        <PrimaryStack.Screen
          name="sign-up"
          options={{
            gestureEnabled: true,
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />
        <PrimaryStack.Screen
          name="rec"
          options={{
            gestureEnabled: true,
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />
      </PrimaryStack>
    </FullScreenLayout>
  )
}
