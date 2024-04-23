import 'react-native-gesture-handler'
import '@constants/AppConfig'
import '@constants/globalDeclarations'
import SplashView from '@screens/splash/SplashView'
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
import { BottomTabsStack } from '@libs/Navigation/TabsStacks'
import AppThemeProvider from '@providers/AppTheme'

LogBox.ignoreLogs(['NativeEvent'])
//TODO add Localizations or Cronos objectx
//TODO add buttons
//TODO change splash view visibility prop name in dev mode hideInDev=true
//TODO add lottie
//TODO add auth token to useApi and get, post, patch
//TODO add useAync storage provider
NativeWindStyleSheet.setOutput({ default: 'native' })

export default function AppLayout() {
  return (
    <AppLoadingProvider>
      <AppThemeProvider>
        <ToastsProvider>
          <SafeAreaProvider>
            <TranslationProvider>
              <FontsProvider>
                <ScreenOrientationProvider>
                  <SessionProvider>
                    <SplashView showInDev={false}>
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
      </AppThemeProvider>
    </AppLoadingProvider>
  )
}

function StopRenderIfAppNotLoaded({ children }) {
  let { isAppLoaded } = useAppLoadingProvider()

  return isAppLoaded ? children : null
}
