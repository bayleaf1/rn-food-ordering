import clsx from 'clsx'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Layout({ children }) {
  return children
}
Layout.VisibleArea = VisibleArea
Layout.SafeArea = SafeArea
Layout.VerticalPart = VerticalPart
Layout.HorizontalPart = HorizontalPart
Layout.Content = View

export function SafeFullScreenLayout({ children, bgColor, contentTw = '' }) {
  return (
    <Layout.VisibleArea bgColor={bgColor}>
      <Layout.SafeArea top right bottom left>
        <Layout.VerticalPart>
          <Layout.HorizontalPart>
            <Layout.Content tw={'flex-1' + ' ' + contentTw}>{children}</Layout.Content>
          </Layout.HorizontalPart>
        </Layout.VerticalPart>
      </Layout.SafeArea>
    </Layout.VisibleArea>
  )
}

export const LayoutWithTopContent = ({ children, bgColor, contentTw = '' }) => {
  return (
    <Layout.VisibleArea bgColor={bgColor}>
      <Layout.SafeArea right bottom left>
        <Layout.VerticalPart top={10}>
          <Layout.HorizontalPart>
            <Layout.Content tw={clsx('flex-1', contentTw)}>{children}</Layout.Content>
          </Layout.HorizontalPart>
        </Layout.VerticalPart>
      </Layout.SafeArea>
    </Layout.VisibleArea>
  )
}

export const LayoutForBottomTabs = ({ headerIsShown, children, contentTw = '', bgColor }) => {
  let safeAreaMargins = { right: true, left: true }
  if (!headerIsShown) safeAreaMargins.top = true
  let topMargin = 0
  if (headerIsShown) topMargin = 16
  return (
    <Layout.VisibleArea bgColor={bgColor}>
      <Layout.SafeArea {...safeAreaMargins}>
        <Layout.HorizontalPart>
          <Layout.VerticalPart top={topMargin} bottom={16} moreTw="overflow-hidden bg-red-400">
            <Layout.Content tw={clsx('flex-1', contentTw)}>{children}</Layout.Content>
          </Layout.VerticalPart>
        </Layout.HorizontalPart>
      </Layout.SafeArea>
    </Layout.VisibleArea>
  )
}

function VisibleArea({ baseTw = 'flex-1', children, bgColor }) {
  return <View tw={baseTw} style={{ backgroundColor: bgColor }} children={children} />
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
      children={children}
    />
  )
}

function VerticalPart({ top, bottom, moreTw = '', children }) {
  let style = {}
  if (top) style.marginTop = top
  if (bottom) style.marginBottom = bottom
  return <View tw={clsx('flex-1', moreTw)} style={style} children={children} />
}

function HorizontalPart({ left = 16, right = 16, moreTw = '', children }) {
  let style = {}
  if (left) style.marginLeft = left
  if (right) style.marginRight = right
  return <View tw={clsx('flex-1', moreTw)} style={style} children={children} />
}
