import Writing from '@components/Writing/Writing'
import { SliderDrawerStack } from '@libs/Navigation/DrawerStacks'

export default function Page() {
  return (
    <SliderDrawerStack.SceneZoomOut>
      {/* <LayoutWithTopContent> */}
        <Writing>Drawer - home</Writing>
      {/* </LayoutWithTopContent> */}
    </SliderDrawerStack.SceneZoomOut>
  )
}
