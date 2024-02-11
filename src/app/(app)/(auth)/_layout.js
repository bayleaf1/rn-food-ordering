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
  home: { label: 'One', iconName: 'home', goToScreen: 'home' },
  settings: { label: 'Two', iconName: 'search', goToScreen: 'settings' },
  // cart: { label: 'Two', iconName: 'cart', goToScreen: 'cart' },
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

                let route = tabBarNavigationItems[stateRoute.name]
                if (!route) throw new Error('Missing route: ' + route.name)

                return (
                  <Go toScreen={route.goToScreen} doNotUsePressable>
                    <View tw={cn('h-full flex-1 grow items-center justify-center rounded-full')}>
                      <Icon
                        name={route.iconName}
                        ctw={'h-8 w-10'}
                        iconElementTw={cn(
                          isActive ? 'fill-primary stroke-primary' : 'fill-black stroke-black'
                        )}
                      />
                      {/* //TODO Add label */}
                    </View>
                  </Go>
                )
              })}
            </View>
          </ViewWithShadow>
        )
      }}
    >
      <BottomTabsStack.Screen name="home" />
      <BottomTabsStack.Screen name="settings" />
    </BottomTabsStack>
  )

  return (
    <PrimaryStack initialRouteName="home" screenOptions={{ headerShown: false }}>
      <PrimaryStack.Screen name="home" />
      <PrimaryStack.Screen name="settings" />
    </PrimaryStack>
  )
}
