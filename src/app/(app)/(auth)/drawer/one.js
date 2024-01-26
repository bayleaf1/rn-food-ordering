import Writing from '@components/Writing/Writing'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { SliderDrawerStack } from '@libs/Navigation/DrawerStacks'

export default function Page() {
  return (
    <SliderDrawerStack.SceneZoomOut>
      <SafeFullScreenLayout headerIsShown>
        <Writing>Drawer - home</Writing>
      </SafeFullScreenLayout>
    </SliderDrawerStack.SceneZoomOut>
  )
}
