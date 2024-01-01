import { Pressable, Text, View } from 'react-native'
import { useSessionProvider } from '../../../providers/SessionProvider'
import Compass from '../../../libs/Navigation/Go'
import { SafeFullScreenLayout } from '../../../layouts/BaseLayout'

export default function Page() {
  const { signIn } = useSessionProvider()

  return (
    <SafeFullScreenLayout>
      <Text>Sign In</Text>

      {/* <Link asChild href={'/'} onPress={signIn}> */}
      {/* <Go goToRoute="home" onPress={signIn}> */}
       <Pressable onPress={signIn}>

        <Text>Home</Text>
       </Pressable>
      {/* </Compass> */}
      {/* </Link> */}
    </SafeFullScreenLayout>
  )
}
