import { Pressable, Text } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { useSessionProvider } from '@providers/SessionProvider'

export default function Page() {
  const { signIn } = useSessionProvider()

  return (
    <SafeFullScreenLayout>
      <Text>Sign In</Text>

      {/* <Link asChild href={'/'} onPress={signIn}> */}
      {/* <Go gotoScreen="home" onPress={signIn}> */}
       <Pressable onPress={signIn}>

        <Text>Home</Text>
       </Pressable>
      {/* </Compass> */}
      {/* </Link> */}
    </SafeFullScreenLayout>
  )
}
