import { SliderDrawerStack } from '../../../../libs/Navigation/DrawerStacks'

export default function DrawerLayout() {
  return (
    <SliderDrawerStack>
      <SliderDrawerStack.Screen name="one" />
      <SliderDrawerStack.Screen name="two" />
    </SliderDrawerStack>
  )
}
