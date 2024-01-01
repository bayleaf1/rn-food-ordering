import { Link, Redirect } from 'expo-router'
import { Text, View } from 'react-native'
import { useSessionProvider } from '../../../providers/SessionProvider'

export default function Page() {
  const { signIn, session } = useSessionProvider()

  // if (session) return <Redirect href="/" />

  return (
    <View>
      <Text>Sign up</Text>

      <Link asChild href={'/'} onPress={signIn}>
        <Text>Home</Text>
      </Link>
    </View>
  )
}
