import React from 'react'
import PrimaryStack from '../libs/Navigation/PrimaryStack' // PRIMARY

import FontsProvider from '../providers/FontsProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function _layout() {
  return (
    <SafeAreaProvider>
      <FontsProvider>
        <PrimaryStack>
          <PrimaryStack.Screen name="index" />
          <PrimaryStack.Screen name="second" />
        </PrimaryStack>
      </FontsProvider>
    </SafeAreaProvider>
  )
}
