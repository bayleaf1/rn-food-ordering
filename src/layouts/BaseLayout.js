import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

function Layout({ children }) {
  return children
}
Layout.VisibleArea = VisibleArea
Layout.SafeArea = SafeArea
Layout.VerticalPart = VerticalPart
Layout.HorizontalPart = HorizontalPart

export function SafeFullScreenLayout({ children, bgColor }) {
  return (
    <Layout.VisibleArea bgColor={bgColor}>
      <Layout.SafeArea top right bottom left>
        <Layout.VerticalPart>
          <Layout.HorizontalPart>{children}</Layout.HorizontalPart>
        </Layout.VerticalPart>
      </Layout.SafeArea>
    </Layout.VisibleArea>
  )
}


export const LayoutWithTopContent = ({ children, bgColor }) => {
  return (
    <Layout.VisibleArea bgColor={bgColor}>
      <Layout.SafeArea right bottom left>
        <Layout.VerticalPart top={10}>
          <Layout.HorizontalPart>{children}</Layout.HorizontalPart>
        </Layout.VerticalPart>
      </Layout.SafeArea>
    </Layout.VisibleArea>
  )
}

function VisibleArea({ children, bgColor }) {
  return (
    <View tw="flex-1" style={{ backgroundColor: bgColor }}>
      {children}
    </View>
  )
}

function SafeArea({ children, top, right, bottom, left }) {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        marginTop: top ? insets.top : 0,
        marginRight: right ? insets.right : 0,
        marginBottom: bottom ? insets.bottom : 0,
        marginLeft: left ? insets.left : 0,
      }}
    >
      {children}
    </View>
  )
}

function VerticalPart({ children, top = 0, bottom = 0 }) {
  return (
    <View tw="bg-gray-5x00 flex-1" style={{ marginTop: top, marginBottom: bottom }}>
      {children}
    </View>
  )
}

function HorizontalPart({ children }) {
  return <View tw="bg-gray-4x00 ml-4 mr-4 flex-1">{children}</View>
}
