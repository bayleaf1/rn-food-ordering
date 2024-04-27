import { View } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Go from '@libs/Navigation/Go'
import AppText from '@components/AppText/AppText'

//! For some reason tailwind is not working on this file
export default function CustomUnmatched() {
  return (
    <SafeFullScreenLayout>
      <View style={{ flex: 1 }}>
        <AppText h1 style={{ marginTop: 200, textAlign: 'center' }}>
          Screen not found
        </AppText>
        {/* ! Go componenet not working */}
        <Go toScreen="home">
          <AppText h2 style={{ marginTop: 20, textAlign: 'center' }}>
            Return to home
          </AppText>
        </Go>
      </View>
    </SafeFullScreenLayout>
  )
}
