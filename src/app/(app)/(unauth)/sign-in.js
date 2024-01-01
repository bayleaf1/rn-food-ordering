import { Text, View } from 'react-native'
import { useSessionProvider } from '../../../providers/SessionProvider'
import Compass from '../../../libs/Navigation/Compass'

export default function Page() {
  const { signIn } = useSessionProvider()

  return (
    <View>
      <Text>Sign In</Text>

      {/* <Link asChild href={'/'} onPress={signIn}> */}
      <Compass goToRoute="home" onPress={signIn}>
        <Text>Home</Text>
      </Compass>
      {/* </Link> */}
    </View>
  )
}
