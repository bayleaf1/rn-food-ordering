import AppText from '@components/AppText/AppText'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import useApi from '@libs/Api'
import { wp } from '@libs/Styling'
import { useScreenOrientationProvider } from '@providers/ScreenOrientationProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import { Pressable, ScrollView, View } from 'react-native'

export default function Page() {
  let { signOut } = useSessionProvider()
  let { setLanguageAndSaveToStorage, AvailableLanguages } = useTranslationProvider()
  let { portraitOrLandscape } = useScreenOrientationProvider()

  let { data, statusCode } = useApi('/todos/1', { defaultData: {} })

  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')}> Home </AppText>
      <Pressable onPress={signOut}>
        <AppText ctw={cn('')}> Sing out </AppText>
      </Pressable>
    </SafeFullScreenLayout>
  )
}
