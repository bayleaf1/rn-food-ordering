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
import React from 'react'
import { View } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Writing from '@components/Writing/Writing'
import Go from '@libs/Navigation/Go'


//TODO add Localizations or Cronos objectx
//TODO add buttons
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
