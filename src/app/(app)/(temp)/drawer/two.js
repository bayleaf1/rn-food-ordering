import AppText from '@components/AppText/AppText';
import { LayoutWithTopContent, SafeFullScreenLayout } from '@layouts/BaseLayout';

export default function Page() {
  return (
    <SafeFullScreenLayout headerIsShown>
      <AppText>Drawer - second</AppText>
    </SafeFullScreenLayout>
  )
}
