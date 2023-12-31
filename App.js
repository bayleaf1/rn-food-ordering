import 'react-native-gesture-handler'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BaseLayout from './src/layouts/BaseLayout'
import FontsProvider from './src/providers/FontsProvider'
// import * as ScreenOrientation from 'expo-screen-orientation'
import Routes from './src/libs/Navigation/Routes'
import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated'
import { NativeWindStyleSheet } from 'nativewind'
import { createStackNavigatorWithDefaultScreenOptions } from './src/libs/Navigation/Navigators'
// import {
//   SharedElement,
//   SharedElementTransition,
//   RNAnimatedSharedElementTransitionView,
//   nodeFromRef,
// } from 'react-native-shared-element'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
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

// const Stack = createNativeStackNavigator()
const Stack = createStackNavigatorWithDefaultScreenOptions()
// const Stack = createSharedElementStackNavigator()

// const customTransition = SharedTransition.custom((values) => {
//   'worklet'
//   return {
//     height: withSpring(values.targetHeight),
//     width: withSpring(values.targetWidth),
//     // originX: withSpring(values.targetOriginX),
//     // originY: withSpring(values.targetOriginY),
//   }
// })

let startAncestor
let startNode
function Home({ navigation }) {
  // const position = new Animated.Value(0)

  return (
    <View tw="mt-20 flex-1 bg-blue-400">
      <Pressable onPress={() => navigation.navigate('Log')}>
        <Text tw="bg-white">HOMEx</Text>
      </Pressable>

      {/* <View style={StyleSheet.absoluteFill}> */}
      {/* <SharedElementTransition
          start={{
            node: startNode,
            ancestor: startAncestor,
          }}
          end={{
            node: endNode,
            ancestor: endAncestor,
          }}
          position={position}
          animation="move"
          resize="auto"
          align="auto"
        />
      </View> */}

      {/* <View ref={(ref) => (startAncestor = nodeFromRef(ref))}>
        <SharedElement onNode={(node) => (startNode = node)}>
          <View style={{ width: 200, height: 200, backgroundColor: 'red' }} />
        </SharedElement>
      </View> */}
      {/* <SharedElement id={`item.photo`}> */}
        <View style={{ width: 150, height: 150, backgroundColor: 'purple' }} />
      {/* </SharedElement> */}
      {/* <Animated.View
        style={{ width: 300, height: 300, backgroundColor: 'cyan' }}
        sharedTransitionTag="tag"
        sharedTransitionStyle={customTransition}
      /> */}
    </View>
  )
}
let endAncestor
let endNode
function Log({ navigation }) {
  return (
    <View tw="flex-1 bg-red-400">
      <Pressable onPress={() => navigation.goBack('Home')}>
        {/* <Text tw="bg-white">Log</Text> */}
        <Text tw="bg-white">Log</Text>
        <Text tw="bg-white">Log</Text>
        <Text tw="bg-white">Log</Text>
        <Text tw="bg-white">Log</Text>

        {/* <View ref={(ref) => (endAncestor = nodeFromRef(ref))}>
          <SharedElement onNode={(node) => (endNode = node)}>
            <View style={{ width: 300, height: 300, backgroundColor: 'purple' }} />
          </SharedElement>
        </View> */}
        {/* <Animated.View
          style={{ width: 150, height: 150, backgroundColor: 'purple' }}
          sharedTransitionTag="tag"
          sharedTransitionStyle={customTransition}
        /> */}
        {/* <SharedElement id={`item.photo`}> */}
          <View style={{ width: 150 * 2, height: 150 * 2, backgroundColor: 'purple' }} />
        {/* </SharedElement> */}
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
            // screenOptions={{
            //   headerMode: 'float',
            // }}
            >
              <Stack.Screen
                name={Routes.login.toString()}
                component={Home}
                options={
                  {
                    // animation: 'slide_from_left',
                    // headerShown: false,
                    // presentation: 'modal',
                    // animationTypeForReplace: 'push',
                    // animation:'slide_from_right',
                  }
                }
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
                name={Routes.login.resetPassword.toString()}
                component={Log}
                // options={{
                //   gestureEnabled: true,
                //   gestureDirection: 'vertical',
                // }}
              />
            </Stack.Navigator>
          </BaseLayout>
        </NavigationContainer>
      </SafeAreaProvider>
    </FontsProvider>
  )
}
