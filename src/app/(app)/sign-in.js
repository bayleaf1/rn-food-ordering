//TODO implement
export function ErrorBoundary(props) {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>{props.error.message}</Text>
      <Text onPress={props.retry}>Try Again?</Text>
    </View>
  )
}

import { Link, Redirect } from 'expo-router'
import { Text, View } from 'react-native'
import { useSession } from '../../providers/SessionProvider'
import WheelMan from '../../libs/Navigation/WheelMan'

export default function Page() {
  const { signIn } = useSession()

  return (
    <View>
      <Text>Sign In</Text>

      {/* <Link asChild href={'/'} onPress={signIn}> */}
      <WheelMan to="home" onPress={signIn}>
        <Text>Home</Text>
      </WheelMan>
      {/* </Link> */}
    </View>
  )
}
