import { View } from 'react-native'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'

export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack()
  console.log("55-43", )
  return (
    <View tw={cn('flex-1 bg-gray-400')}>
      <Writing ctw={cn('')}> MODALX </Writing>
    </View>
  )
  return (
    <SafeFullScreenLayout>
      <View
        style={{
          marginTop: 30,
          borderRadius: 20,
          backgroundColor: 'red',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
        {!isPresented && <Link href="../">Dismiss</Link>}
        {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
        <StatusBar style="light" />
        <Writing ctw={cn('')}> MODAL </Writing>
      </View>
    </SafeFullScreenLayout>
  )
}