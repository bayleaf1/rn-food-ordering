import { Link, Redirect } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { useSessionProvider } from '../../../providers/SessionProvider'
import { SafeFullScreenLayout } from '../../../layouts/BaseLayout'

export default function Page() {
  const { signIn } = useSessionProvider()

  return (
    <SafeFullScreenLayout>
      <Text>Sign up</Text>

      <Pressable onPress={signIn}>
        <Text>Home</Text>
      </Pressable>
    </SafeFullScreenLayout>
  )
}
