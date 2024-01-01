import React, { useMemo } from 'react'
import PrimaryStack from '../../../libs/Navigation/PrimaryStack'
import { FullScreenLayout } from '../../../layouts/BaseLayout'
import { Redirect, Slot } from 'expo-router'
import { useSessionProvider } from '../../../providers/SessionProvider'
import { Text, View } from 'react-native'
import { TransitionPresets } from '@react-navigation/stack'
import Routes from '../../../libs/Navigation/Routes'

export default function AppLayout() {
  const { isSignedIn } = useSessionProvider()

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (false) {
    return <Text tw="mt-20">Loading...</Text>
  }
  
  if (isSignedIn) return <Redirect href={Routes.home} />

  return (
    <PrimaryStack initialRouteName="index">
      <PrimaryStack.Screen
        name="index"
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
          name="password-reset"
          options={{
            gestureEnabled: true,
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />
    </PrimaryStack>
  )
  // return <Slot/>
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
