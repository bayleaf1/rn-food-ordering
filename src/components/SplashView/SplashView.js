import { useFontsProvider } from '@providers/FontsProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import Constants from 'expo-constants'
import { SplashScreen } from 'expo-router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
export { ErrorBoundary } from 'expo-router'

const loadedSplashImage = require('@assets/splash.jpg')

try {
//   SplashScreen.preventAutoHideAsync()
} catch (e) {
  console.error(`Splash screen :`, e)
}
const IS_DEV_ENV = true
function SplashView({ children }) {
  const animation = useMemo(() => new Animated.Value(1), [])
  const [isAppReady, setAppReady] = useState(false)
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false)
  const [isImageLoaded, setImageLoaded] = useState(false)

  const { providerIsLoaded: fonts } = useFontsProvider()
  const { providerIsLoaded: session } = useSessionProvider()
  const { providerIsLoaded: translation } = useTranslationProvider()

  const loaders = useMemo(
    () => [fonts, session, translation, isImageLoaded],
    [fonts, session, translation, isImageLoaded]
  )

  useEffect(() => {
    function startAnimationIfAppIsReady() {
      if (isAppReady) {
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => setAnimationComplete(true))
      }
    }

    // if (isAppReady) {
    //   SplashScreen.hideAsync()
    //   setAnimationComplete(true)
    // }
    startAnimationIfAppIsReady()
  }, [isAppReady])

  const onImageLoaded = useCallback(async () => {
    try {
        SplashScreen.hideAsync()
    } finally {
      setAppReady(true)
    }
  }, [])

  useEffect(() => {
    function verifyIfAppHasLoadedAndSetInState() {
      if (loaders.every(Boolean)) onImageLoaded()
      console.log(`loaders:`, loaders)
    }
    verifyIfAppHasLoadedAndSetInState()
  }, [loaders])

  if (IS_DEV_ENV) return children

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children} 
      {/* {children} */}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.expoConfig.splash.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: Constants.expoConfig.splash.resizeMode || 'contain',
              transform: [
                // {
                //   scale: animation,
                // },
              ],
            }}
            source={loadedSplashImage}
            onLoadEnd={() => setImageLoaded(true)}
            // onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  )
}

export default SplashView
