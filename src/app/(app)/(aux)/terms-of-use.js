import { Text } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import AppText from '@components/AppText/AppText'

import Go from '@libs/Navigation/Go'
export default function Page() {
  return (
    <SafeFullScreenLayout headerIsShown>
      <Text>Terms of use</Text>
      <Go toScreen={'drawerOne'}>
        <AppText>Go to drawer</AppText>
      </Go>
    </SafeFullScreenLayout>
  )
}
