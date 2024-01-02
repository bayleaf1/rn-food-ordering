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

//XTODO if navigation doesn't work on android
// react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.kt or MainActivity.java file which is located under android/app/src/main/java/<your package name>/.

// Add the highlighted code to the body of MainActivity class:

NativeWindStyleSheet.setOutput({ default: 'native' })
//tw - tailwind
//ctw - component tailwind;

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
