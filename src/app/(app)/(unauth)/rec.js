import { Link, Redirect } from 'expo-router'
import { Text, View } from 'react-native'
import { useSessionProvider } from '../../../providers/SessionProvider'

export default function Page() {

  return (
    <View>
      <Text>Sign let</Text>

      <Link asChild href={'/'} onPress={signIn}>
        <Text>Home</Text>
      </Link>
    </View>
  )
}
