import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeFullScreenLayout } from '../../../layouts/BaseLayout'
// import { useSessionProvider } from '../../providers/SessionProvider'

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
