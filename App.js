import 'react-native-gesture-handler'
import { Animated, Pressable, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BaseLayout from './src/layouts/BaseLayout'
import FontsProvider from './src/providers/FontsProvider'
// import * as ScreenOrientation from 'expo-screen-orientation'

import {
  NavigationContainer,
  StackRouter,
  createNavigatorFactory,
  useNavigationBuilder,
} from '@react-navigation/native'
import React, { useState } from 'react'
// import {} form '@react-navigation/'

import { StackView, createStackNavigator } from '@react-navigation/stack'
import { NativeWindStyleSheet } from 'nativewind'
import { createStackNavigatorWithDefaultScreenOptions } from './src/libs/Navigators'
NativeWindStyleSheet.setOutput({
  default: 'native',
})
// LogBox.ignoreLogs(['`new NativeEventEmitter()` was called with a non-null']) //Hide warnings

//TODO if navigation doesn't work on android
// react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.kt or MainActivity.java file which is located under android/app/src/main/java/<your package name>/.

// Add the highlighted code to the body of MainActivity class:

//tw - tailwind
//ctw - component tailwind;

//TODO de incercat https://github.com/kristerkari/react-native-svg-example?tab=readme-ov-file
//TODO text, text name component?, textinput, navigation, drawer 1 or 2, translating

const Stack = createStackNavigatorWithDefaultScreenOptions()

function Home({ navigation }) {
  return (
    <View tw="mt-20 flex-1 bg-blue-400">
      <Pressable onPress={() => navigation.navigate('Log')}>
        <Text tw="bg-white">HOMEx</Text>
      </Pressable>
    </View>
  )
}
function Log({ navigation }) {
  return (
    <View tw="flex-1 bg-red-400">
      <Pressable onPress={() => navigation.goBack('Home')}>
        {/* <Text tw="bg-white">Log</Text> */}
        <Text tw="bg-white">Log</Text>
        <Text tw="bg-white">Log</Text>
        <Text tw="bg-white">Log</Text>
        <Text tw="bg-white">Log</Text>
      </Pressable>
    </View>
  )
}

export default function App() {
  let data = Array.from({ length: 200 })
  let link = 'https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg'

  const [number, onChangeNumber] = useState('')

  return (
    <FontsProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <BaseLayout>
            <Stack.Navigator
              defaultOptions={{ a: 'b' }}
              screenOptions={{
                headerMode: 'float',
              }}
            >
              <Stack.Screen
                name="Home"
                component={Home}
                // options={
                //   {
                //     // header: () => null,
                //     // gestureEnabled: true,
                //     // gestureDirection: 'horizontal',
                //     // transitionSpec: {
                //     //   open: config,
                //     //   close: config,
                //     // },
                //     // // headerMode: 'screen',
                //     // cardStyleInterpolator: forSlide,
                //     // HeaderStyleInterpolators: HeaderStyleInterpolators.forFade,
                //     // HeaderStyleInterpolators
                //   }
                // }
              />
              <Stack.Screen
                name="Log"
                component={Log}
                options={{
                  gestureEnabled: true,
                  gestureDirection: 'vertical',
                }}
              />
            </Stack.Navigator>
          </BaseLayout>
        </NavigationContainer>
      </SafeAreaProvider>
    </FontsProvider>
  )
}
