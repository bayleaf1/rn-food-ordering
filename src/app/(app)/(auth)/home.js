import LocalPicture from '@components/Pictures/LocalPicture'
import Writing from '@components/Writing/Writing'
import { GLOBAL_CONFIG } from '@config/globalConfig'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import useApi, { Endpoints } from '@libs/Api'
import Go from '@libs/Navigation/Go'
import { useScreenOrientationProvider } from '@providers/ScreenOrientationProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import { Link } from 'expo-router'
import { Pressable, Text } from 'react-native'

export default function Page() {
  let { signOut } = useSessionProvider()
  let { setLanguageAndSaveToStorage, AvailableLanguages } = useTranslationProvider()
  let { portraitOrLandscape } = useScreenOrientationProvider()

  
  let { data, statusCode, } = useApi("/todos/1", { defaultData: {} })
  // let { data } = useApi(Endpoints.me.value(), { defaultData: {} })

  return (
    <SafeFullScreenLayout contentTw="bg-red-200">
      {/* {er()} */}
      <Text tw="self-stretch">HomePage</Text>
      <Text>{GLOBAL_CONFIG.ENV}</Text>
      <Text>{portraitOrLandscape('port', 'land')}</Text>
      {/* <Writing onPress={()=>{throw new Error('SMTH FOMR HOME')}} >Error</Writing> */}
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

      <Go toScreen={'shared-one'} children={<Text>Shared animation</Text>} />

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

      <Writing>{statusCode} {JSON.stringify(data, null, 2)} </Writing>
    </SafeFullScreenLayout>
  )
}
