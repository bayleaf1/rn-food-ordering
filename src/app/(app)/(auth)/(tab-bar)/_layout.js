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

function screenOptions({ iconName = 'home', testIDprefix, username, label }) {
  return {
    ...(label ? {tabBarLabel:label} : {}),
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
  }
}
export default function AuthorizedLayout() {
  const { isSignedOut } = useSessionProvider()
  const { user } = useSessionProvider()

  if (isSignedOut) return <Redirect href={Screens.singIn} />

  // return (
  //   <Tabs>
  //     {/* <Tabs.Screen name="homex" options={{ labe tabBarButton:( p  ) => {
  //            console.log("04-06", p) 
  //             return ( <View testID="user_tab_button" tw={cn("w-5 h-5 bg-gray-100")}></View> )
  //           } }} /> */}
  //     <Tabs.Screen
  //       name="home"
  //       options={screenOptions({ iconName: 'home', testIDprefix: 'home' })}
  //     />
  //     <Tabs.Screen name="plans" options={{
  //       href:null,
  //       // tabBarStyle:{display: 'none'},
  //       // lazy: true,
        
  //       ...screenOptions({ iconName: 'burger' }), 
          
    
  //   }} />
  //     <Tabs.Screen
  //       name="user"
  //       options={screenOptions({
  //         iconName: 'burger',
  //         testIDprefix: 'user',
  //         username: UserManager.get(user, 'firstName') + '_' + UserManager.get(user, 'lastName'),
  //         label: UserManager.fullFirstNameAndFirstLetterFromLastName(user)
  //       })}
  //     />
  //   </Tabs>
  // )
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
