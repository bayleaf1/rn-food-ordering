import { Layout } from '@layouts/BaseLayout'
import LayoutForBottomTabs from '@layouts/LayoutForBottomTabs'
import Screens from '@libs/Navigation/ScreenList'
import { BottomTabsStack } from '@libs/Navigation/TabsStacks'
import { useSessionProvider } from '@providers/SessionProvider'
import { Redirect } from 'expo-router'

//TODO RESTORE
// export const ErrorBoundary = CustomErrorBoundary
let tabBarNavigationItems = {
  home: { label: 'Home', iconName: 'home', goToScreen: 'home' },
  favourites: { label: 'Fav', iconName: 'heart-outlined', goToScreen: 'favourites' },
  search: { label: 'Search', iconName: 'search', goToScreen: 'search' },
  // 'food-review': { label: 'Food', iconName: 'cart', goToScreen: 'food-review' },
}
export default function AuthorizedLayout() {
  const { isSignedOut } = useSessionProvider()

  if (isSignedOut) return <Redirect href={Screens.singIn} />

  return (
    <BottomTabsStack
      screenOptions={{ headerShown: false }}
      tabBar={({ state }) => {
        if (state.routes.length !== Object.keys(tabBarNavigationItems).length)
          throw new Error('Some routes are missing or superfluos')

        let routes = state.routes.map((stateRoute, idx) => {
          let route = tabBarNavigationItems[stateRoute.name]
          if (!route) throw new Error('Missing route: ' + route.name)
          return { ...route, isActive: state.index === idx }
        })

        return <LayoutForBottomTabs.BottomTabs routes={routes} />
      }}
    >
      <BottomTabsStack.Screen name="home" />
      <BottomTabsStack.Screen
        name="search"
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <Layout.Header renderLeftElement={null} navigation={navigation} title={'Search food'} />
          ),
        }}
      />
      <BottomTabsStack.Screen
        name="favourites"
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <Layout.Header
              renderLeftElement={null}
              navigation={navigation}
              title={'My favourites'}
            />
          ),
        }}
      />
      {/* <BottomTabsStack.Screen
        name="food-review"
        options={{
          animation: 'slide',
        }}
      /> */}
    </BottomTabsStack>
  )
}
