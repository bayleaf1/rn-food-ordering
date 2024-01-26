import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { Text } from 'react-native'

export default function Page() {

  return (
    <SafeFullScreenLayout>

      <Text>Sign let</Text>

      {/* <Link asChild href={'/'}> */}
        <Text>Home</Text>
      {/* </Link> */}
    </SafeFullScreenLayout>
  )
}
