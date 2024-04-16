import AppConfig from '@constants/AppConfig'
import { useOnMount } from '@libs/LifecycleHooks'
import { useAppLoadingProvider } from '@providers/AppLoadingProvider'
import Constants from 'expo-constants'
import { SplashScreen } from 'expo-router'
import { useEffect, useMemo, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
export { ErrorBoundary } from 'expo-router'

const loadedSplashImage = require('@assets/splash.jpg')
const IS_DEV_ENV = AppConfig.isDevEnv();

try {
  SplashScreen.preventAutoHideAsync()
} catch (e) {
  console.error(`Splash screen :`, e)
}

function hideSystemSplash() {
  try {
    SplashScreen.hideAsync()
  } catch (e) {
    console.error('Could not hide splash screen, --SplashView--', e.message, e)
  }
}

function runAnimationWhileAppIsLoading(animation, cb) {
  Animated.timing(animation, {
    toValue: 1.05,
    duration: 800,
    useNativeDriver: true,
  }).start(cb)
}

function runExitAnimationWhenAppHasLoadedAndTreeIsRendered(animation, cb) {
  Animated.timing(animation, {
    toValue: 0,
    duration: 700,
    useNativeDriver: true,
  }).start(cb)
}

function SplashView({ children, showInDev }) {
  const animationWhileAppIsLoading = useMemo(() => new Animated.Value(1), [])
  const exitAnimation = useMemo(() => new Animated.Value(1), [])

  const [isLoadingAnimationComplete, setLoadingAnimationComplete] = useState(false )
  const [isExitAnimationComplete, setExitAnimationComplete] = useState(IS_DEV_ENV ? !showInDev : false)
  const [isCustomSplashImageLoaded, setCustomSplashImageLoaded] = useState(false)

  let { isAppLoaded } = useAppLoadingProvider()

  useOnMount(() => {
    runAnimationWhileAppIsLoading(animationWhileAppIsLoading, () =>
      setLoadingAnimationComplete(true)
    )
  })

  const appAndSplashImageHasLoaded = useMemo(
    () => [isAppLoaded, isCustomSplashImageLoaded, isLoadingAnimationComplete].every(Boolean),
    [isAppLoaded, isCustomSplashImageLoaded, isLoadingAnimationComplete]
  )

  useEffect(() => {
    if (appAndSplashImageHasLoaded) {
      hideSystemSplash()
      runExitAnimationWhenAppHasLoadedAndTreeIsRendered(exitAnimation, () =>
        setExitAnimationComplete(true)
      )
    }
  }, [appAndSplashImageHasLoaded])

  let showCustomSplashElement = useMemo(() => {
    if (IS_DEV_ENV) return !!showInDev && !isExitAnimationComplete
    return !isExitAnimationComplete
  }, [isExitAnimationComplete, showInDev, IS_DEV_ENV])

  useEffect(() => {
    if (!showCustomSplashElement && IS_DEV_ENV) hideSystemSplash()
  }, [showCustomSplashElement])


  return (
    <View style={{ flex: 1 }}>

      {(isLoadingAnimationComplete || !showCustomSplashElement)  && children}

      {showCustomSplashElement && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.expoConfig.splash.backgroundColor,
              opacity: exitAnimation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: Constants.expoConfig.splash.resizeMode || 'contain',
              transform: [
                {
                  scale: animationWhileAppIsLoading,
                },
              ],
            }}
            source={loadedSplashImage}
            onLoadEnd={() => setCustomSplashImageLoaded(true)}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  )
}

export default SplashView
