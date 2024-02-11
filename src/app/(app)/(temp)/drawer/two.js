import Writing from '@components/Writing/Writing';
import { LayoutWithTopContent, SafeFullScreenLayout } from '@layouts/BaseLayout';

export default function Page() {
  return (
    <SafeFullScreenLayout headerIsShown>
      <Writing>Drawer - second</Writing>
    </SafeFullScreenLayout>
  )
}
