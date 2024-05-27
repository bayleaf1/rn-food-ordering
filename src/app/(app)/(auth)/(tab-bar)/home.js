import AppText from '@components/AppText/AppText'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { useSessionProvider } from '@providers/SessionProvider'
import { Pressable } from 'react-native'

export default function Page() {
  let { signOut } = useSessionProvider()

  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')} testID="home_screen">Home</AppText>
      <Pressable onPress={signOut} >
        <AppText ctw={cn('')} testID='sign_out_button'> Sing out </AppText>
      </Pressable>
    </SafeFullScreenLayout>
  )
}
