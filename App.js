import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'

NativeWindStyleSheet.setOutput({
  default: 'native',
})
export default function App() {
  return (
    <View tw="flex-1 items-center justify-center hover:bg-black hover:opacity-60">
      <View tw="" />
      <Text className="text-red-600">Open up App.js to start working on your app!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  )
}
