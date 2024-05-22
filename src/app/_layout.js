import '@constants/AppConfig'
import '@constants/globalDeclarations'
import 'react-native-gesture-handler'
// import SplashView from '@screens/splash/SplashView'
import NativeStackResponsableForScreenOrientation from '@libs/Navigation/NativeStackResponsableForScreenOrientation'
import AppLoadingProvider, { useAppLoadingProvider } from '@providers/AppLoadingProvider'
import AppThemeProvider from '@providers/AppTheme'
import DeepLinksProvider from '@providers/DeepLinksProvider'
import FontsProvider from '@providers/FontsProvider'
import ScreenOrientationProvider from '@providers/ScreenOrientationProvider'
import SessionProvider from '@providers/SessionProvider'
import ToastsProvider from '@providers/ToastsProvider'
import TranslationProvider from '@providers/TranslationProvider'
import { NativeWindStyleSheet } from 'nativewind'
import { LogBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppConfig from '@constants/AppConfig'

LogBox.ignoreLogs(['NativeEvent'])
//TODO add Localizations or Cronos objectx
//TODO add buttons
//TODO change splash view visibility prop name in dev mode hideInDev=true
//TODO add lottie
//TODO add auth token to useApi and get, post, patch
//TODO add useAync storage provider
NativeWindStyleSheet.setOutput({ default: 'native' })

export default function AppLayout() {
  const Splash = AppConfig.SHOW_SPLASH_SCREEN
    ? require('@screens/splash/SplashView').default
    : (p) => p.children

  return (
    <DeepLinksProvider>
      <AppLoadingProvider>
        <AppThemeProvider>
          <ToastsProvider>
            <SafeAreaProvider>
              <TranslationProvider>
                <FontsProvider>
                  <ScreenOrientationProvider>
                    <SessionProvider>
                      <Splash>
                        <StopRenderIfAppNotLoaded>
                          {/* Might change name */}
                          <NativeStackResponsableForScreenOrientation />
                        </StopRenderIfAppNotLoaded>
                      </Splash>
                    </SessionProvider>
                  </ScreenOrientationProvider>
                </FontsProvider>
              </TranslationProvider>
            </SafeAreaProvider>
          </ToastsProvider>
        </AppThemeProvider>
      </AppLoadingProvider>
    </DeepLinksProvider>
  )
}

function StopRenderIfAppNotLoaded({ children }) {
  let { isAppLoaded } = useAppLoadingProvider()

  return isAppLoaded ? children : null
}
