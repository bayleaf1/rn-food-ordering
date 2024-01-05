import 'react-native-gesture-handler'

import FontsProvider from '@providers/FontsProvider'
import SessionProvider from '@providers/SessionProvider'
import TranslationProvider from '@providers/TranslationProvider'
import { Slot } from 'expo-router'
import { NativeWindStyleSheet } from 'nativewind'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashView from '@components/SplashView/SplashView'
// import * as SplashScreen from 'expo-splash-screen';
export { ErrorBoundary } from 'expo-router'

//TODO cand se schimba ecranele clipeste alb
//TODO screen orientation
//TODO de incercat https://github.com/kristerkari/react-native-svg-example?tab=readme-ov-file
//TODO check skia (shadow)
//TODO check huszstand state
//TODO add Localizations or Cronos objectx

NativeWindStyleSheet.setOutput({ default: 'native' })

// SplashScreen.preventAutoHideAsync()

// Instruct SplashScreen not to hide yet, we want to do this manually
// SplashScreen.preventAutoHideAsync()
// .catch(() => {
/* reloading the app might trigger some race conditions, ignore them */
// })

export default function AppLayout() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hideAsync()
  //   }, 2000)
  // }, [])

  

  return (
    <SafeAreaProvider>
      <FontsProvider>
        <TranslationProvider>
          <SessionProvider>
            <SplashView>
              <Slot />
            </SplashView>
          </SessionProvider>
        </TranslationProvider>
      </FontsProvider>
    </SafeAreaProvider>
  )
}

