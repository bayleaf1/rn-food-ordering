import PrimaryStack from '@libs/Navigation/PrimaryStack'
import { BottomTabsStack } from '@libs/Navigation/TabsStacks'

let tabBarNavigationItems = {
  one: { label: 'One', iconName: 'home' },
  two: { label: 'Two', iconName: 'home' },
}
export default function TabsLayout() {
  return (
    <PrimaryStack>
      <PrimaryStack.Screen name="one" />
      <PrimaryStack.Screen name="two" />
    </PrimaryStack>
  )
  return (
    <BottomTabsStack screenOptions={{headerShown: true}} tabBarNavigationItems={tabBarNavigationItems}>
      <BottomTabsStack.Screen name="one" />
      <BottomTabsStack.Screen name="two" />
    </BottomTabsStack>
  )
}
