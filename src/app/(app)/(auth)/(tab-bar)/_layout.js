import AppText from '@components/AppText/AppText'
import AppIcon from '@components/Pictures/AppIcon'
import LocalPicture from '@components/Pictures/LocalPicture'
import { Layout } from '@layouts/BaseLayout'
import LayoutForBottomTabs from '@layouts/LayoutForBottomTabs'
import Screens from '@libs/Navigation/ScreenList'
import { BottomTabsStack } from '@libs/Navigation/TabsStacks'
import { UserManager } from '@libs/UserManager'
import { useSessionProvider } from '@providers/SessionProvider'
import { Redirect, Stack, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Button } from 'react-native-paper'
// import { Image } from 'react-native'
//TODO RESTORE
// export const ErrorBoundary = CustomErrorBoundary
let tabBarNavigationItems = {
  home: { label: 'Home', iconName: 'home', screenName: 'home' },
  favourites: { label: 'Fav', iconName: 'heart-outlined', screenName: 'favourites' },
  search: { label: 'Search', iconName: 'search', screenName: 'search' },
  cart: { label: 'Cart', iconName: 'cart', screenName: 'cart' },
}

function screenOptions({ iconName = 'home', testIDprefix, username, resolveEnabled = () => true }) {
  return {
    tabBarIcon: (props) => (
      <View testID={username + '_username'}>
        <View
          testID={testIDprefix + '_tab_button'}
          tw={cn('h-8 w-8')}
          style={{ width: props.size, height: props.size }}
        >
          <AppIcon
            name={iconName}
            ctw={'h-full w-full'}
            iconElementTw={props.focused && 'fill-primary'}
            iconProps={{ color: 'red' }}
          />
        </View>
      </View>
    ),
    tabBarButton: (p) => {
      let enabled = resolveEnabled()
      let opts = enabled
        ? { onLongPress: p.onLongPress, onPress: p.onPress, opacity: 1 }
        : { onLongPress: () => '', onPress: () => '', opacity: 0.5 }

      return (
        <Pressable
          {...p}
          onLongPress={opts.onLongPress}
          onPress={opts.onPress}
          style={[p.style, { opacity: opts.opacity }]}
        />
      )
    },
  }
}
export default function AuthorizedLayout() {
  const { isSignedOut } = useSessionProvider()
  const { user } = useSessionProvider()
  // console.log(`user:`, user);

  if (isSignedOut) return <Redirect href={Screens.singIn} />

  return (
    <Tabs>
      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: UserManager.fullFirstNameAndFirstLetterFromLastName(user),
          ...screenOptions({
            iconName: 'burger',
            testIDprefix: 'user',
            username: UserManager.get(user, 'firstName') + '_' + UserManager.get(user, 'lastName'),
          }),
        }}
      />
      <Tabs.Screen
        name="plans"
        options={{
          ...screenOptions({ iconName: 'burger', 
          resolveEnabled: () => UserManager.isCompleted(user),


           }),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          ...screenOptions({
            iconName: 'burger',
            resolveEnabled: () => UserManager.isCompleted(user),
          }),
        }}
      />
    </Tabs>
  )
  // return <Stack />

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
      {/* <BottomTabsStack.Screen
        name="search"
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <Layout.Header renderLeftElement={null} navigation={navigation} title={'Search food'} />
          ),
        }}
      /> */}
      {/* <BottomTabsStack.Screen
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
      /> */}
      {/* <BottomTabsStack.Screen
        name="cart"
        options={{
          headerShown: true,
          header: ({ navigation }) => (
            <Layout.Header renderLeftElement={null} navigation={navigation} title={'Cart'} />
          ),
        }}
      /> */}
    </BottomTabsStack>
  )
}
