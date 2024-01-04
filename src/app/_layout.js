import 'react-native-gesture-handler'

import { Slot } from 'expo-router'
import { NativeWindStyleSheet } from 'nativewind'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import FontsProvider from '../providers/FontsProvider'
import SessionProvider from '../providers/SessionProvider'
import TranslationProvider from '../providers/TranslationProvider'
export { ErrorBoundary } from 'expo-router'

//TODO cand se schimba ecranele clipeste alb
//TODO screen orientation
//TODO de incercat https://github.com/kristerkari/react-native-svg-example?tab=readme-ov-file
//TODO translating
//TODO check skia (shadow)
//TODO check huszstand state

NativeWindStyleSheet.setOutput({ default: 'native' })

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <FontsProvider>
        <TranslationProvider>
          <SessionProvider>
            <Slot />
          </SessionProvider>
        </TranslationProvider>
      </FontsProvider>
    </SafeAreaProvider>
  )
}
