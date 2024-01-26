import { Text } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Writing from '@components/Writing/Writing'

import Go from '@libs/Navigation/Go'
export default function Page() {
  return (
    <SafeFullScreenLayout headerIsShown>
      <Text>Terms of use</Text>
      <Go toScreen={'drawerOne'}>
        <Writing>Go to drawer</Writing>
      </Go>
    </SafeFullScreenLayout>
  )
}
