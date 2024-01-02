import 'react-native-gesture-handler'
import React from 'react'
import { Slot } from 'expo-router'
import { NativeWindStyleSheet } from 'nativewind'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import FontsProvider from '../providers/FontsProvider'
import SessionProvider from '../providers/SessionProvider'
export { ErrorBoundary } from 'expo-router'

//TODO cand se schimba ecranele clipeste alb
//TODO drawer

//TODO de incercat https://github.com/kristerkari/react-native-svg-example?tab=readme-ov-file
//TODO translating

NativeWindStyleSheet.setOutput({ default: 'native' })

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
