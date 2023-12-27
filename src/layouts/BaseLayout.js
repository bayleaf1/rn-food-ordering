import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

function BaseLayout({ children }) {
  return (
    <BaseLayout.VisibleAreaWithSafeArea>
      <BaseLayout.VerticalPart>
        <BaseLayout.HorizontalPart>{children}</BaseLayout.HorizontalPart>
      </BaseLayout.VerticalPart>
    </BaseLayout.VisibleAreaWithSafeArea>
  )
}

BaseLayout.VisibleAreaWithSafeArea = VisibleAreaWithSafeArea
BaseLayout.VerticalPart = VerticalPart
BaseLayout.HorizontalPart = HorizontalPart

export default BaseLayout

function VisibleAreaWithSafeArea({ children }) {
  return (
    <VisibleArea>
      <SafeArea>{children}</SafeArea>
    </VisibleArea>
  )
}

function VisibleArea({ children }) {
  return <View tw="flex-1 bg-gray-700">{children}</View>
}

function SafeArea({ children }) {
  const insets = useSafeAreaInsets()

  const tw = `mt-[${insets.top}px] mr-[${insets.right}px] mb-[${insets.bottom}px] ml-[${insets.left}px] flex-1`
  
  return <View tw={tw}>{children}</View>
}

function VerticalPart({ children }) {
  return <View tw="mt-0 mb-0 flex-1 bg-gray-500">{children}</View>
}

function HorizontalPart({ children }) {
  return <View tw="ml-4 mr-4 flex-1 bg-gray-400">{children}</View>
}
