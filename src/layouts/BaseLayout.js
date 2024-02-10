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
Layout.Content = Content
Layout.HORIZONTAL_SPACE = 16
Layout.VERTICAL_TOP_SPACE = 16
Layout.VERTICAL_BOTTOM_SPACE = 0

export function SafeFullScreenLayout({ visibleAreaTw, headerIsShown, children, contentTw = '' }) {
  let resolver = propsResolverByHeaderShowness()
  return (
    <Layout.VisibleArea moreTw={visibleAreaTw}>
      <Layout.SafeArea {...resolver.safeAreaMargins()}>
        <Layout.VerticalPart topSpace={resolver.topSpace()} bottomSpace={0}>
          <Layout.HorizontalPart>
            <Layout.Content moreTw={contentTw}>{children}</Layout.Content>
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
      topSpace() {
        return headerIsShown ? Layout.VERTICAL_TOP_SPACE : Layout.VERTICAL_TOP_SPACE / 2
      },
    }
  }
}

export const LayoutForBottomTabs = ({ headerIsShown, children, contentTw = '' }) => {
  let resolver = propsResolverByHeaderShowness()
  return (
    <Layout.VisibleArea>
      <Layout.SafeArea {...resolver.safeAreaMargins()}>
        <Layout.VerticalPart topSpace={resolver.topSpace()} moreTw="overflow-hidden bg-red-400">
          <Layout.HorizontalPart>
            <Layout.Content tw={cn('flex-1', contentTw)}>{children}</Layout.Content>
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
      topSpace() {
        return headerIsShown ? Layout.VERTICAL_TOP_SPACE : 0
      },
    }
  }
}

function Content({ moreTw, children }) {
  return <View tw={cn(moreTw)}>{children}</View>
}
function VisibleArea({ moreTw = '', children }) {
  return <View tw={cn('flex-1', moreTw)} children={children} />
}

function SafeArea({ top, right, bottom, left, moreTw, children }) {
  const insets = useSafeAreaInsets()

  return (
    <View
      tw={cn('flex-1', moreTw)}
      style={{
        marginTop: top ? insets.top : 0,
        marginRight: right ? insets.right : 0,
        marginBottom: bottom ? insets.bottom : 0,
        marginLeft: left ? insets.left : 0,
      }}
      children={children}
    />
  )
}

function VerticalPart({ topSpace, bottomSpace, moreTw = '', style = {}, children }) {
  return (
    <View
      tw={cn('flex-1', moreTw)}
      style={{ ...style, marginBottom: bottomSpace, marginTop: topSpace }}
      children={children}
    />
  )
}

function HorizontalPart({
  leftSpace = Layout.HORIZONTAL_SPACE,
  rightSpace = Layout.HORIZONTAL_SPACE,
  moreTw = '',
  children,
}) {
  return (
    <View
      tw={cn('flex-1', moreTw)}
      style={{ marginLeft: leftSpace, marginRight: rightSpace }}
      children={children}
    />
  )
}
