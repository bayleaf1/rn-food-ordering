//TODO implement
// export function ErrorBoundary(props) {
//     return (
//       <View style={{ flex: 1, backgroundColor: "red" }}>
//         <Text>{props.error.message}</Text>
//         <Text onPress={props.retry}>Try Again?</Text>
//       </View>
//     );
//   }

import { Link, Redirect } from 'expo-router'
import { Text, View } from 'react-native'
import { useSession } from '../../providers/SessionProvider'

export default function Page() {
  const { signIn, session } = useSession()

  // if (session) return <Redirect href="/" />

  return (
    <View>
      <Text>Sign let</Text>

      <Link asChild href={'/'} onPress={signIn}>
        <Text>Home</Text>
      </Link>
    </View>
  )
}
