import { useFontsProvider } from '@providers/FontsProvider'
import ProvidersLoadingWatcher from '@providers/ProvidersLoadingWatcher'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import Constants from 'expo-constants'
import { SplashScreen } from 'expo-router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
export { ErrorBoundary } from 'expo-router'

const loadedSplashImage = require('@assets/splash.jpg')
const devSplashImage = require('@assets/dev-splash.png') //
const IS_DEV_ENV = false ////

try {
  SplashScreen.preventAutoHideAsync()
} catch (e) {
  console.error(`Splash screen :`, e)
}
function SplashView({ children, showAnimationInDevEnv }) {
  // TODO continue with showAnimationInDevEnv flag////
  const animation = useMemo(() => new Animated.Value(1), [])
  const [isAppReady, setAppReady] = useState(false)
  const [isSplashAnimationComplete, setAnimationComplete] = useState(IS_DEV_ENV)
  const [isImageLoaded, setImageLoaded] = useState(false)
  const [isAppProvidersLoaded, setAppProvidersLoaded] = useState(false)

  const loaders = useMemo(
    () => [isAppProvidersLoaded, isImageLoaded],
    [isAppProvidersLoaded, isImageLoaded]
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
    if (!IS_DEV_ENV) startAnimationIfAppIsReady()
  }, [isAppReady])

  const hideImediatlySplashScreenAndSetAppIsReady = useCallback(() => {
    try {
      SplashScreen.hideAsync() //fl
    } finally {
      setAppReady(true)
    }
  }, [])

  useEffect(() => {
    if (IS_DEV_ENV) hideImediatlySplashScreenAndSetAppIsReady()
  }, [])

  useEffect(() => {
    function verifyIfAppHasLoadedAndSetInState() {
      if (loaders.every(Boolean)) hideImediatlySplashScreenAndSetAppIsReady()
    }
    verifyIfAppHasLoadedAndSetInState()
  }, [loaders])

  return (
    <View style={{ flex: 1 }}>
      <ProvidersLoadingWatcher onAllProvidersLoaded={() => setAppProvidersLoaded(true)}>
        {children}
      </ProvidersLoadingWatcher>

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
            source={IS_DEV_ENV ? devSplashImage : loadedSplashImage}
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
