import AppIcon from '@components/Pictures/AppIcon'
import ViewWithShadow from '@components/ViewWithShadow'
import AppText from '@components/AppText/AppText'
import Go from '@libs/Navigation/Go'
import { View } from 'react-native'
import { Layout } from './BaseLayout'
import Ripple from '@components/Ripple'

export default function LayoutForBottomTabs({
  headerIsShown,
  children,
  contentTw = '',
  verticalPartBottomSpace = LayoutForBottomTabs.defaultVerticalPartBottomSpace,
}) {
  let resolver = propsResolverByHeaderShowness()

  return (
    <Layout.VisibleArea moreTw="flex-1">
      <Layout.SafeArea {...resolver.safeAreaMargins()}>
        <Layout.VerticalPart topSpace={resolver.topSpace()} bottomSpace={verticalPartBottomSpace}>
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

LayoutForBottomTabs.defaultVerticalPartBottomSpace = 143

LayoutForBottomTabs.BottomTabs = ({ routes = [LayoutForBottomTabs.BottomTabs.defaultRoute] }) => {
  return (
    <ViewWithShadow elevation={5} ctw="flex-0 h-[50px] justify-center rounded-t-[30px]">
      <View tw={cn('flex-0 mx-10 h-full flex-row justify-around')}>
        {routes.map((route, key) => {
          return (
            <Ripple
              ctw={cn('h-full flex-1 grow items-center justify-center rounded-full')}
              onPress={Go.getGoToScreen(route.screenName)}
              key={key}
            >
              <View>
                <AppIcon
                  name={route.iconName}
                  ctw={'h-6 w-10'}
                  iconElementTw={cn(
                    route.isActive ? 'fill-primary stroke-primary' : 'fill-black stroke-black'
                  )}
                />
                {/* <AppText s9 ctw={cn('text-center', route.isActive && 'text-primary')}>
                  {route.label}
                </AppText> */}
              </View>
            </Ripple>
          )
        })}
      </View>
    </ViewWithShadow>
  )
}

LayoutForBottomTabs.BottomTabs.defaultRoute = {
  label: 'Home',
  iconName: 'home',
  goToScreen: 'home',
  isActive: false,
}
