import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { useSessionProvider } from '../../../providers/SessionProvider'
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
    <SafeFullScreenLayout contentTw="bg-red-200">
      {/* // <LayoutWithTopContent bgColor="gray"> */}
      {/* <View tw="flex-1 bg-gray-500"> */}
      {er()}
      <Text>HomePage</Text>

      <Go toScreen={'singIn'} children={<Text>Sign in</Text>} />
 
      <Go toScreen={'singUp'} children={<Text>Sign up</Text>} />
     
      <Go toScreen={'settings'} children={<Text>Settings</Text>} />

      <Link href="/secondx" asChild>
        <Text>Inexistent</Text>
      </Link>
      
      <Go toScreen={'TOS'} children={<Text>TOS</Text>} />
      
      <Go toScreen={'privacyPolicy'} children={<Text>P.P</Text>} />

      <Go toScreen={'drawerone'} children={<Text>Drawer</Text>} />
    
      <Go toScreen={'tabsone'} children={<Text>Tabs</Text>} />


      <Pressable onPress={signOut}>
        <Text>Sign out</Text>
      </Pressable>
      {/* </View> */}
    </SafeFullScreenLayout>
  )
}
