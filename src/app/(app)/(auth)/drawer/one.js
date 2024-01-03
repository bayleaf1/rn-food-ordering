import Writing from '../../../../components/Writing'
import { LayoutWithTopContent } from '../../../../layouts/BaseLayout'
import { SliderDrawerStack } from '../../../../libs/Navigation/DrawerStacks'

export default function Page() {
  return (
    <SliderDrawerStack.SceneZoomOut>
      {/* <LayoutWithTopContent> */}
        <Writing>Drawer - home</Writing>
      {/* </LayoutWithTopContent> */}
    </SliderDrawerStack.SceneZoomOut>
  )
}
