import { Tabs } from 'expo-router/tabs'
import { Text, View } from 'react-native'
import Go from '../../libs/Navigation/Go'
import { Layout } from '../../layouts/BaseLayout'
import LocalPicture from '../../components/Pictures/LocalPicture'
import AppText from '@components/AppText/AppText'

// Example
// let tabBarNavigationItems = {
//   one: { label: 'One', iconName: 'home' },
//   two: { label: 'Two', iconName: 'home' },
// }
let withDefaultScreenOptions = (passed = {}) => ({animation: 'slide_from_right', ...passed })

export function BottomTabsStack({ tabBarNavigationItems = {}, ...props }) {
  return (
    <Tabs
      tabBar={(p) => <CustomTabBar navigationItems={tabBarNavigationItems} {...p} />}
      {...props}
      screenOptions={(...args) => {
        let passed =
          typeof props.screenOptions === 'function'
            ? props.screenOptions(...args)
            : props.screenOptions
        return withDefaultScreenOptions(passed)
      }}
    />
  )
}
BottomTabsStack.Screen = Tabs.Screen
//TODO add to main repo
BottomTabsStack.CustomTabBar = CustomTabBar

function CustomTabBar({ navigationItems = {}, state }) {
  return (
    <>
      <View tw="flex h-10 justify-center border-t border-gray-200 bg-slate-50">
        {/* <Layout.HorizontalPart baseTw="flex-0"> */}
        <Layout.Content tw="flex flex-row justify-around">
          {state.routes.map((route, idx) => {
            let isActive = state.index === idx
            let item = navigationItems[route.name] || { label: '', iconName: '' }
            return (
              <View key={idx} tw="flex" style={{ elevation: 10 }}>
                <Go toScreen={'tabs' + route.name}>
                  <LocalPicture
                    icon={item.iconName}
                    ctw="h-[20px]"
                    iconProps={{ fill: isActive && 'red' }}
                  />
                  <AppText size="xs">{item.label}</AppText>
                </Go>
              </View>
            )
          })}
        </Layout.Content>
        {/* </Layout.HorizontalPart> */}
      </View>
    </>
  )
}
