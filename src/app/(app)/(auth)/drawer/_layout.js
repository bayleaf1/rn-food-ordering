import { Drawer } from 'expo-router/drawer'
import SliderDrawerStack from '../../../../libs/Navigation/DrawerStack'

export default function DrawerLayout() {
  return (
    <SliderDrawerStack>
      <SliderDrawerStack.Screen name="one" />
      <SliderDrawerStack.Screen name="two" />
    </SliderDrawerStack>
  )
}
