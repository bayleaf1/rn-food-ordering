import BlockWithShadow from '@components/BlockWithShadow'
import WritingInput from '@components/FormRelated/WritingInput'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import Writing from '@components/Writing/Writing'
import { getViews } from '@components/components'
import { GLOBAL_CONFIG } from '@config/globalConfig'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import useApi from '@libs/Api'
import Go from '@libs/Navigation/Go'
import { useScreenOrientationProvider } from '@providers/ScreenOrientationProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
// import clsx from 'clsx'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { Pressable, Text, TouchableNativeFeedback, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

let [SearchPanel] = getViews()

export default function Page() {
  let { signOut } = useSessionProvider()
  let { setLanguageAndSaveToStorage, AvailableLanguages } = useTranslationProvider()
  let { portraitOrLandscape } = useScreenOrientationProvider()

  let { data, statusCode } = useApi('/todos/1', { defaultData: {} })
  // let { data } = useApi(Endpoints.me.value(), { defaultData: {} })

  return (
    <SafeFullScreenLayout visibleAreaTw={"bg-gray-25"}  contentTw="bg-gray-25x">
      <SearchPanel tw="flex flex-row " style={{ columnGap: 10 }}>
        <WritingInput
          placeholder={'Search food...'}
          inputViewTw={'bg-gray-50 h-12'}
          containerTw={'grow'}
          leftAddornment={
            <Icon
              name="search"
              containerTw="ml-2 w-[25px] h-[25px]"
              ctw="fill-gray-300 stroke-gray-300"
            />
          }
        />

        <Anim>
          <Btn ctw="h-12">
            <Icon name="filters" ctw="fill-white" containerTw="w-6 h-6 pointer-events-none" />
          </Btn>
        </Anim>
      </SearchPanel>
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

      <LocalPicture image="home" ctw="bg-slate-500 h-40" />

      {/* </TouchableRipple> */}

      {/* <Writing>{statusCode} {JSON.stringify(data, null, 2)} </Writing> */}
    </SafeFullScreenLayout>
  )
}

function Anim({ containerTw = 'flex-start', children }) {
  let size = useSharedValue(1)
  let [targetSize, setTargetSize] = useState(1)

  useEffect(() => {
    size.value = withSpring(targetSize, {
      stiffness: 100,
    })
  }, [targetSize])

  return (
    <Pressable
      onPressIn={() => {
        setTargetSize(0.98)
      }}
      onPressOut={() => {
        setTargetSize(1)
      }}
      tw={containerTw}
    >
      <Animated.View style={{ transform: [{ scale: size }], backgroundColor: 'redx' }}>
        {children}
      </Animated.View>
    </Pressable>
  )
}

function Btn({ ctw, squareTw = 'bg-primary', children }) {
  return (
    <View tw={clsx('relative aspect-square py-1 px-1', ctw)}>
      <BlockWithShadow
        elevation={3}
        ctw={clsx('inset-0 aspect-square h-full w-full rotate-45 rounded-xl', squareTw)}
      />
      <View tw="absolute inset-0 flex items-center justify-center">{children}</View>
    </View>
  )
}
