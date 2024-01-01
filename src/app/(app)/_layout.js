import React, { useMemo } from 'react'
import PrimaryStack from '../../libs/Navigation/PrimaryStack'
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
  //TODO add slash screen provider and component here
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (false) {
    return <Text tw="mt-20">Loading...</Text>
  }
  // return <Slot/>
  return <PrimaryStack />
  // return (
  //   <PrimaryStack>
  //     <PrimaryStack.Screen name="terms-of-use" options={{headerShown: true}} />
  //     <PrimaryStack.Screen name="privacy-policy" options={{headerShown: true}} />
  //   </PrimaryStack>
  // )
}
