import { View } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Go from '@libs/Navigation/Go'
import Writing from '@components/Writing/Writing'

//! For some reason tailwind is not working on this file
export default function CustomUnmatched() {
  return (
    <SafeFullScreenLayout>
      <View style={{ flex: 1 }}>
        <Writing h1 style={{ marginTop: 200, textAlign: 'center' }}>
          Screen not found
        </Writing>

        <Go toScreen="home">
          <Writing h2 style={{ marginTop: 20, textAlign: 'center' }}>
            Return to home
          </Writing>
        </Go>
      </View>
    </SafeFullScreenLayout>
  )
}
