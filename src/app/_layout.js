import 'react-native-gesture-handler'

import '@config/config'
import FontsProvider from '@providers/FontsProvider'
import SessionProvider from '@providers/SessionProvider'
import TranslationProvider from '@providers/TranslationProvider'
import { Slot, Stack } from 'expo-router'
import { NativeWindStyleSheet } from 'nativewind'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashView from '@components/SplashView/SplashView'
import AppLoadingProvider, { useAppLoadingProvider } from '@providers/AppLoadingProvider'
import ScreenOrientationProvider from '@providers/ScreenOrientationProvider'
import NativeStackResponsableForScreenOrientation from '@libs/Navigation/NativeStackResponsableForScreenOrientation'
export { ErrorBoundary } from 'expo-router'

//TODO cand se schimba ecranele clipeste alb
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
  return (
    <AppLoadingProvider>
      <SafeAreaProvider>
        <FontsProvider>
          <ScreenOrientationProvider>
            <TranslationProvider>
              <SessionProvider>
                <SplashView>
                  <StopRenderIfAppNotLoaded>
                    <NativeStackResponsableForScreenOrientation />
                  </StopRenderIfAppNotLoaded>
                </SplashView>
              </SessionProvider>
            </TranslationProvider>
          </ScreenOrientationProvider>
        </FontsProvider>
      </SafeAreaProvider>
    </AppLoadingProvider>
  )
}

function StopRenderIfAppNotLoaded({ children }) {
  let { isAppLoaded } = useAppLoadingProvider()

  return isAppLoaded ? children : null
}
