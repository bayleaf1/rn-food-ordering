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

export function SafeFullScreenLayout({ visibleAreaTw, headerIsShown, children, contentTw = '' }) {
  let resolver = propsResolverByHeaderShowness()
  return (
    <Layout.VisibleArea moreTw={visibleAreaTw} >
      <Layout.SafeArea {...resolver.safeAreaMargins()}>
        <Layout.VerticalPart topMarginTw={resolver.topMarginTw()} bottomMarginTw="">
          <Layout.HorizontalPart leftMarginTw={'ml-4'} rightMarginTw={'mr-4'}>
            <Layout.Content tw={clsx('flex-1', contentTw)}>{children}</Layout.Content>
          </Layout.HorizontalPart>
        </Layout.VerticalPart>
      </Layout.SafeArea>
    </Layout.VisibleArea>
  )

  function propsResolverByHeaderShowness() {
    return {
      safeAreaMargins() {
        let margins = { right: true, left: true, bottom: true }
        if (!headerIsShown) margins.top = true
        return margins
      },
      topMarginTw() {
        return headerIsShown ? 'mt-4' : 'mt-2'
      },
    }
  }
}

export const LayoutForBottomTabs = ({ headerIsShown, children, contentTw = '' }) => {
  let resolver = propsResolverByHeaderShowness()
  return (
    <Layout.VisibleArea>
      <Layout.SafeArea {...resolver.safeAreaMargins()}>
        <Layout.VerticalPart
          topMarginTw={resolver.topMarginTw()}
          bottomMarginTw=""
          moreTw="overflow-hidden bg-red-400"
        >
          <Layout.HorizontalPart leftMarginTw={'ml-4'} rightMarginTw={'mr-4'}>
            <Layout.Content tw={clsx('flex-1', contentTw)}>{children}</Layout.Content>
          </Layout.HorizontalPart>
        </Layout.VerticalPart>
      </Layout.SafeArea>
    </Layout.VisibleArea>
  )

  function propsResolverByHeaderShowness() {
    return {
      safeAreaMargins() {
        let margins = { right: true, left: true }
        if (!headerIsShown) margins.top = true
        return margins
      },
      topMarginTw() {
        return headerIsShown ? 'mt-4' : ''
      },
    }
  }
}

function VisibleArea({ moreTw = '', children }) {
  return <View tw={clsx('flex-1', moreTw)} children={children} />
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

function VerticalPart({ topMarginTw, bottomMarginTw, moreTw = '', children }) {
  return <View tw={clsx('flex-1', topMarginTw, bottomMarginTw, moreTw)} children={children} />
}

function HorizontalPart({ leftMarginTw, rightMarginTw, moreTw = '', children }) {
  return <View tw={clsx('flex-1', leftMarginTw, rightMarginTw, moreTw)} children={children} />
}
