import React, { useMemo } from 'react'
import PrimaryStack from '../../../libs/Navigation/PrimaryStack'
import { FullScreenLayout } from '../../../layouts/BaseLayout'
import { Redirect, Slot } from 'expo-router'
import { useSessionProvider } from '../../../providers/SessionProvider'
import { Text, View } from 'react-native'


export default function AppLayout() {
  const { isSignedIn } = useSessionProvider()

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (false) {
    return <Text tw="mt-20">Loading...</Text>
  }
  if (isSignedIn) return <Redirect href="/" />

  return <Slot/>
  // return (
  //   <FullScreenLayout bgColor={'gray'}>
  //     <PrimaryStack initialRouteName="sign-in">
  //       <PrimaryStack.Screen
  //         name="sign-in"
  //         options={{
  //           cardStyle: { backgroundColor: 'transparent' },
  //         }}
  //       />
  //       <PrimaryStack.Screen
  //         name="sign-up"
  //         options={{
  //           cardStyle: { backgroundColor: 'transparent' },
  //         }}
  //       />
  //       <PrimaryStack.Screen
  //         name="password-recover"
  //         options={{
  //           cardStyle: { backgroundColor: 'transparent' },
  //         }}
  //       />
  //     </PrimaryStack>
  //   </FullScreenLayout>
  // )
}
