import Writing from '@components/Writing/Writing'
import Go from '@libs/Navigation/Go'
import PrimaryStack from '@libs/Navigation/PrimaryStack'
import Screens from '@libs/Navigation/ScreenList'
import { useSessionProvider } from '@providers/SessionProvider'
import { Redirect } from 'expo-router'
import CustomErrorBoundary from '@components/ErrorBoundary'
import { BottomTabsStack } from '@libs/Navigation/TabsStacks'
import ViewWithShadow from '@components/ViewWithShadow'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'

//TODO RESTORE
// export const ErrorBoundary = CustomErrorBoundary
let tabBarNavigationItems = {
  home: { label: 'Home', iconName: 'home', goToScreen: 'home' },
  settings: { label: 'Search', iconName: 'search', goToScreen: 'settings' },
  // 'food-review': { label: 'Food', iconName: 'cart', goToScreen: 'food-review' },
}
export default function AuthorizedLayout() {
  const { isSignedOut } = useSessionProvider()

  if (isSignedOut) return <Redirect href={Screens.singIn} />

  return (
    <BottomTabsStack
      screenOptions={{ headerShown: false }}
      tabBar={({ state }) => {
        if (state.routes.length !== Object.keys(tabBarNavigationItems).length) {
          throw new Error('Some routes are missing or superfluos')
        }
        return (
          <ViewWithShadow elevation={5} ctw="flex-0 h-[72px] justify-center rounded-t-[60px]">
            <View tw={cn('flex-0 mx-10 h-full flex-row justify-around')}>
              {state.routes.map((stateRoute, idx) => {
                let isActive = state.index === idx

                let route = tabBarNavigationItems[stateRoute.name] || tabBarNavigationItems.home
                if (!route) throw new Error('Missing route: ' + route.name)

                return (
                  <AnimationList.ZoomOutOnClick
                    containerTw={cn('h-full flex-1 grow items-center justify-center rounded-full')}
                    onPress={() => Go.toScreen(route.goToScreen)}
                  >
                    <Icon
                      name={route.iconName}
                      ctw={'h-8 w-10'}
                      iconElementTw={cn(
                        isActive ? 'fill-primary stroke-primary' : 'fill-black stroke-black'
                      )}
                    />
                    <Writing s9 ctw={cn('text-center', isActive && 'text-primary')}>
                      {route.label}
                    </Writing>
                  </AnimationList.ZoomOutOnClick>
                )
              })}
            </View>
          </ViewWithShadow>
        )
      }}
    >
      <BottomTabsStack.Screen name="home" />
      <BottomTabsStack.Screen name="settings" />
      <BottomTabsStack.Screen name="food-review" options={{ animation: 'slide' }} />
    </BottomTabsStack>
  )

  return (
    <PrimaryStack initialRouteName="home" screenOptions={{ headerShown: false }}>
      <PrimaryStack.Screen name="home" />
      <PrimaryStack.Screen name="settings" />
    </PrimaryStack>
  )
}
