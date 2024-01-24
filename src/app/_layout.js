import 'react-native-gesture-handler'
import '@config/config'
import SplashView from '@components/SplashView/SplashView'
import NativeStackResponsableForScreenOrientation from '@libs/Navigation/NativeStackResponsableForScreenOrientation'
import AppLoadingProvider, { useAppLoadingProvider } from '@providers/AppLoadingProvider'
import FontsProvider from '@providers/FontsProvider'
import ScreenOrientationProvider from '@providers/ScreenOrientationProvider'
import SessionProvider from '@providers/SessionProvider'
import ToastsProvider from '@providers/ToastsProvider'
import TranslationProvider from '@providers/TranslationProvider'
import { NativeWindStyleSheet } from 'nativewind'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Slot } from 'expo-router'
import { LogBox } from 'react-native'

LogBox.ignoreLogs(['NativeEvent'])

//TODO add Localizations or Cronos objectx
//TODO add buttons
//TODO change splash view visibility prop name in dev mode hideInDev=true
//TODO add lottie
NativeWindStyleSheet.setOutput({ default: 'native' })

export default function AppLayout() {
  return (
    <AppLoadingProvider>
      <ToastsProvider>
        <SafeAreaProvider>
          <TranslationProvider>
            <FontsProvider>
              <ScreenOrientationProvider>
                <SessionProvider>
                  <SplashView>
                    <StopRenderIfAppNotLoaded>
                      {/* Might change name */}
                      <NativeStackResponsableForScreenOrientation />
                    </StopRenderIfAppNotLoaded>
                  </SplashView>
                </SessionProvider>
              </ScreenOrientationProvider>
            </FontsProvider>
          </TranslationProvider>
        </SafeAreaProvider>
      </ToastsProvider>
    </AppLoadingProvider>
  )
}

function StopRenderIfAppNotLoaded({ children }) {
  let { isAppLoaded } = useAppLoadingProvider()

  return isAppLoaded ? children : null
}
