import { StatusBar } from 'expo-status-bar'
import { Text, View, Image } from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'
import HomeIcon from './assets/icons/home'
import LocalPicture from './src/components/Pictures/LocalPicture'
import RemotePicture from './src/components/Pictures/RemotePicture'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BaseLayout from './src/layouts/BaseLayout'
NativeWindStyleSheet.setOutput({
  default: 'native',
})

//tw - tailwind
//ctw - component tailwind;
export default function App() {
  let link = 'https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg'
  return (
    <SafeAreaProvider>
      <BaseLayout>
      <View>
        
      </View>
        {/* <View tw="box-border mb-20  bg-red-400">
          <Text>
            Lallalalallalalalallalallalalallalallal
          </Text>
        </View>

        <View tw="box-border bg-red-400">
          <Text>
            Lallalalallalalalallalallalalallalallalallalalallalal allalallalalallalalallalalal
          </Text>
        </View>

        <View tw="box-border border bg-red-400">
          <Text>
            Lallalalallalalalallalallalalallalallalallalalallalalallalallalalallalalallalalal
          </Text>
        </View> */}

        {/* <View tw="mt-40 h-20 w-20 border"> */}
        {/* <LocalPicture image="home" /> */}
        {/* <RemotePicture src={link} ctw="w-1/2 h-1/2" /> */}
        {/* </View> */}
        {/* <View tw="w-20 h-20 bg-blue-400" /> */}
        {/* <View tw="w-20 h-20 bg-green-400" /> */}

        <Text className="text-red-600">Open up App.js to start working on your app!</Text>
        {/* <StatusBar style="auto" /> */}
        {/* </View> */}
      </BaseLayout>
    </SafeAreaProvider>
  )
}
