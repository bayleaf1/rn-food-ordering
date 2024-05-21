import { Redirect } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import PrimaryStack from '@libs/Navigation/PrimaryStack'
import Screens from '@libs/Navigation/ScreenList'
import { useSessionProvider } from '@providers/SessionProvider'
import AppConfig from '@constants/AppConfig'

export default function AppLayout() {
  const { isSignedIn } = useSessionProvider()

  if (isSignedIn)
    return <Redirect href={Screens[AppConfig.SCREEN_NAME_TO_REDIRECT_IF_AUTHORIZED]} /> // TODO change to home

  return (
    <PrimaryStack initialRouteName="index">
      <PrimaryStack.Screen name="index" />
      <PrimaryStack.Screen name="sign-up" />
      <PrimaryStack.Screen name="forgot-password" />
    </PrimaryStack>
  )
  // </PrimaryStack>
}
