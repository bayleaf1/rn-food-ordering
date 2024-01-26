import React from 'react'
import PrimaryStack from '@libs/Navigation/PrimaryStack'

export default function Layout() {
  return (
    <PrimaryStack screenOptions={{ headerShown: true }}>
      <PrimaryStack.Screen name="terms-of-use" />
      <PrimaryStack.Screen name="privacy-policy" />
    </PrimaryStack>
  )
}
