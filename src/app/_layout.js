import React from 'react'
import PrimaryStack from '../libs/Navigation/PrimaryStack'

import FontsProvider from '../providers/FontsProvider'
import SessionProvider from '../providers/SessionProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Link, Slot } from 'expo-router'
import { Text, View } from 'react-native'
//TODO check if canGo back and return to login or home screen
export { ErrorBoundary } from 'expo-router';

//TODO cand se schimba ecranele clipeste alb, de pus layout la fiecare ecran
//TODO drawer
export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <FontsProvider>
        <SessionProvider>
          <Slot />
        </SessionProvider>
      </FontsProvider>
    </SafeAreaProvider>
  )
}
