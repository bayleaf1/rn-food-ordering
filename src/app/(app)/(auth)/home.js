import { Link } from 'expo-router'
import { Pressable, Text } from 'react-native'
import LocalPicture from '../../../components/Pictures/LocalPicture'
import Writing from '../../../components/Writing/Writing'
import { SafeFullScreenLayout } from '../../../layouts/BaseLayout'
import Go from '../../../libs/Navigation/Go'
import { useSessionProvider } from '../../../providers/SessionProvider'
import { useTranslationProvider } from '../../../providers/TranslationProvider'

function er() {
  // throw new Error("Cusotm error")
}
export default function Page() {
  let { signOut } = useSessionProvider()
  let { t, setLanguageAndSaveToStorage, AvailableLanguages } = useTranslationProvider()
  // useEffect(() => {
  //   loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true))
  // }, [])

  // if (!wasLoaded) return null
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

      {/* {availableLanguagesList.map((v) => (
        <Pressable onPress={() => setLanguageAndSaveToStorage(v.value)}>
          <Text>change {v.label}</Text>
        </Pressable>
      ))} */}

      <Pressable onPress={() => setLanguageAndSaveToStorage(AvailableLanguages.EN)}>
        <Text>change {AvailableLanguages.EN}</Text>
      </Pressable>

      <Pressable onPress={() => setLanguageAndSaveToStorage(AvailableLanguages.RO)}>
        <Text>change {AvailableLanguages.RO}</Text>
      </Pressable>

      <Writing xl2 t={['greeting', { name: 'Lalal' }]} />

      <LocalPicture image="home" ctw="h-40 bg-slate-500" />
    </SafeFullScreenLayout>
  )
}
