import { Pressable, Text } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { useSessionProvider } from '@providers/SessionProvider'

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
