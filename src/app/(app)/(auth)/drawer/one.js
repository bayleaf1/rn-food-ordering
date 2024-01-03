import Writing from '../../../../components/Writing'
import { LayoutWithTopContent } from '../../../../layouts/BaseLayout'
import DrawerStack from '../../../../libs/Navigation/DrawerStack'

export default function Page() {
  return (
    <DrawerStack.SceneScreenZoomOut>
      <LayoutWithTopContent>
        <Writing>Drawer - home</Writing>
      </LayoutWithTopContent>
    </DrawerStack.SceneScreenZoomOut>
  )
}

