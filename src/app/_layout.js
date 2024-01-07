import 'react-native-gesture-handler'

import SplashView from '@components/SplashView/SplashView'
import '@config/config'
import NativeStackResponsableForScreenOrientation from '@libs/Navigation/NativeStackResponsableForScreenOrientation'
import AppLoadingProvider, { useAppLoadingProvider } from '@providers/AppLoadingProvider'
import FontsProvider from '@providers/FontsProvider'
import ScreenOrientationProvider from '@providers/ScreenOrientationProvider'
import SessionProvider from '@providers/SessionProvider'
import TranslationProvider from '@providers/TranslationProvider'
import { NativeWindStyleSheet } from 'nativewind'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LogBox } from 'react-native'
export { ErrorBoundary } from 'expo-router'

LogBox.ignoreLogs(['new NativeEventEmitter'])
//TODO add Localizations or Cronos objectx

NativeWindStyleSheet.setOutput({ default: 'native' })

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
                    {/* Might change name */}
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
