import Icon from '@components/Pictures/Icon'
import Rhomb from '@components/Rhomb'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import LayoutWithGaps from './LayoutWithGaps'

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
Layout.VERTICAL_BOTTOM_SPACE = 16
Layout.TOTAL_HORIZONTAL_SPACE = Layout.HORIZONTAL_SPACE * 2
Layout.Header = Header

function Header({
  title,
  renderLeftElement = renderGoBackButton,
  renderRightElement = null, 
  navigation,
}) {
  return (
    <LayoutWithGaps.TopSection>
      <View tw={cn('relative flex flex-row items-center')}>
        <View tw={cn('z-10 shrink grow')}>
          {renderLeftElement ? renderLeftElement(navigation) : <Header.Placeholder />}
        </View>

        <View tw={cn('absolute left-0 right-0 shrink grow')}>
          <Writing ctw={cn('text-center')}>{title}</Writing>
        </View>

        <View tw={cn('z-10 flex shrink grow flex-row justify-end')}>
          {renderRightElement ? renderRightElement() : <Header.Placeholder />}
        </View>
      </View>
    </LayoutWithGaps.TopSection>
  )
}
Header.Placeholder = () => <View tw={cn('w-[56px]')} />

function renderGoBackButton(navigation) {
  return (
    <Rhomb
      ctw={cn('h-[56px]')}
      squareTw="bg-white"
      elevation={2}
      onPress={() => {
        if (navigation.canGoBack()) navigation.goBack()
      }}
    >
      <Icon name="chevron-left" ctw={cn('h-8 w-8 -translate-x-0.5')} />
    </Rhomb>
  )
}
Header.AddToFavorites = () => (
  <Rhomb
    ctw={cn('h-[56px]')}
    squareTw="bg-white"
    elevation={2}
    onPress={() => {
      // if (navigation.canGoBack()) navigation.goBack()
    }}
  >
    <Icon name="heart-grey" ctw={cn('h-6 w-6 translate-y-0.5')} />
  </Rhomb>
)

export function SafeFullScreenLayout({ visibleAreaTw, headerIsShown, children, contentTw = '' }) {
  let resolver = propsResolverByHeaderShowness()
  return (
    <Layout.VisibleArea moreTw={visibleAreaTw}>
      <Layout.SafeArea {...resolver.safeAreaMargins()}>
        <Layout.VerticalPart
          topSpace={resolver.topSpace()}
          bottomSpace={Layout.VERTICAL_BOTTOM_SPACE}
        >
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
    <Layout.VisibleArea moreTw="flex-1">
      <Layout.SafeArea {...resolver.safeAreaMargins()}>
        <Layout.VerticalPart topSpace={resolver.topSpace()} bottomSpace={143}>
          <Layout.HorizontalPart moreTw="">
            <Layout.Content tw={cn('', contentTw)}>{children}</Layout.Content>
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
