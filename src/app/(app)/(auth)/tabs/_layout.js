import { Tabs } from 'expo-router/tabs'
import { Text, View } from 'react-native'
import Writing from '../../../../components/Writing'
import Go from '../../../../libs/Navigation/Go'
import clsx from 'clsx'
import { Layout } from '../../../../layouts/BaseLayout'
import LocalPicture from '../../../../components/Pictures/LocalPicture'
import { BottomTabsStack } from '../../../../libs/Navigation/TabsStacks'

let tabBarNavigationItems = {
  one: { label: 'One', iconName: 'home' },
  two: { label: 'Two', iconName: 'home' },
}
export default function TabsLayout() {
  return (
    <BottomTabsStack screenOptions={{headerShown: true}} tabBarNavigationItems={tabBarNavigationItems}>
      <BottomTabsStack.Screen name="one" />
      <BottomTabsStack.Screen name="two" />
    </BottomTabsStack>
  )
}
