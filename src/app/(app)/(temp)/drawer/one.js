import AppText from '@components/AppText/AppText'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { SliderDrawerStack } from '@libs/Navigation/DrawerStacks'

export default function Page() {
  return (
    <SliderDrawerStack.SceneZoomOut>
      <SafeFullScreenLayout headerIsShown>
        <AppText>Drawer - home</AppText>
      </SafeFullScreenLayout>
    </SliderDrawerStack.SceneZoomOut>
  )
}
