import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { LayoutWithTopContent } from '../../../layouts/BaseLayout'
import { useSession } from '../../../providers/SessionProvider'

// export function ErrorBoundary(props) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "red" }}>
//       <Text>{props.error.message}</Text>
//       <Text onPress={props.retry}>Try Again?</Text>
//     </View>
//   );
// }
function er(){
  throw new Error("Cusotm error")

}
export default function Page() {
  let { signOut } = useSession()
  return (
    // <LayoutWithTopContent bgColor="gray">
    <View tw="flex-1 bg-gray-500">
      {er()}
      <Text>HomePage</Text>
      <Link href="/log-in" asChild>
        <Text>Sign in</Text>
      </Link>
      <Link href="/sign-let" asChild>
        <Text>Sign let</Text>
      </Link>
      <Link href="/second" asChild>
        <Text>SecondPage</Text>
      </Link>
      <Link href="/secondx" asChild>
        <Text>Inexistent</Text>
      </Link>
      <Pressable onPress={signOut}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
    // </LayoutWithTopContent>
  )
}
