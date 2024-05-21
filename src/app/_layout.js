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

LogBox.ignoreLogs(['NativeEvent'])
//TODO add Localizations or Cronos objectx
//TODO add buttons
//TODO change splash view visibility prop name in dev mode hideInDev=true
//TODO add lottie
//TODO add auth token to useApi and get, post, patch
//TODO add useAync storage provider
NativeWindStyleSheet.setOutput({ default: 'native' })


export default function AppLayout() {
  // const response = Linking.useURL()
  // const { queryParams } = response ? Linking.parse(response) : { queryParams: {} }
  // // console.log(`res:`, res);
  // console.log(`response:`, queryParams)
  // if (queryParams.authToken === 'clear') removeStorageItemAsync(AppConfig.AUTH_TOKEN_NAME)
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
                    {/* <SplashView showInDev={false}> */}
                    <StopRenderIfAppNotLoaded>
                        {/* Might change name */}
                        <NativeStackResponsableForScreenOrientation />
                    </StopRenderIfAppNotLoaded>
                    {/* </SplashView> */}
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
