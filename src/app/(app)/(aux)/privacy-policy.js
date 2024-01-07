import { Text } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'

export default function Page() {
  return (
    <SafeFullScreenLayout headerIsShown>
      <Text>Privacy policy</Text>
    </SafeFullScreenLayout>
  )
}
