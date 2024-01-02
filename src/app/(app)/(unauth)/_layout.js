import { Redirect } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import PrimaryStack from '../../../libs/Navigation/PrimaryStack'
import Screens from '../../../libs/Navigation/ScreenList'
import { useSessionProvider } from '../../../providers/SessionProvider'

export default function AppLayout() {
  const { isSignedIn } = useSessionProvider()

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (false) {
    return <Text tw="mt-20">Loading...</Text>
  }
  
  if (isSignedIn) return <Redirect href={Screens.home} />

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
          name="reset-password"
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
