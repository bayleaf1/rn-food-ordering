import { BottomTabsStack } from '@libs/Navigation/TabsStacks'

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
