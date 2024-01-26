import { Text } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'

export default function Page() {

  return (
    <SafeFullScreenLayout>

      <Text>Forgot password</Text>

      {/* <Link asChild href={'/'}> */}
        <Text>Home</Text>
      {/* </Link> */}
    </SafeFullScreenLayout>
  )
}
