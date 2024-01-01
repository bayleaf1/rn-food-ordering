import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { useSessionProvider } from '../../../providers/SessionProvider'
import Compass from '../../../libs/Navigation/Go'
import { SafeFullScreenLayout } from '../../../layouts/BaseLayout'
import Go from '../../../libs/Navigation/Go'

// export function ErrorBoundary(props) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "red" }}>
//       <Text>{props.error.message}</Text>
//       <Text onPress={props.retry}>Try Again?</Text>
//     </View>
//   );
// }
function er() {
  // throw new Error("Cusotm error")
}
export default function Page() {
  let { signOut } = useSessionProvider()
  return (
    <SafeFullScreenLayout>

    {/* // <LayoutWithTopContent bgColor="gray"> */}
    <View tw="flex-1 bg-gray-500">
      {er()}
      <Text>HomePage</Text>
      {/* <Link href="/log-in" asChild> */}
      <Go toRoute={'singIn'} children={<Text>Sign in</Text>} />
      {/* <Go to={'singIn'} children={<Text>Sign in</Text>} /> */}
      {/* <Text>Sign in</Text> */}
      {/* </Compass> */}
      {/* </Link> */}
      <Go toRoute={'singUp'} children={<Text>Sign up</Text>} />

      {/* <Link href="/sign-let" asChild>
        <Text>Sign up</Text>
      </Link> */}
      <Go toRoute={'settings'} children={<Text>Settings</Text>} />

      
      <Link href="/secondx" asChild>
        <Text>Inexistent</Text>
      </Link>
      <Go toRoute={'TOS'} children={<Text>TOS</Text>} />
      <Go toRoute={'privacyPolicy'} children={<Text>P.P</Text>} />

      <Pressable onPress={signOut}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
    </SafeFullScreenLayout>
  )
}
