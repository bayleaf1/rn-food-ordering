import AppText from '@components/AppText/AppText'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Go from '@libs/Navigation/Go'
import { View } from 'react-native'
import Animated, {
  Easing,
  SharedTransition,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

export default function Page() {
  const transition = SharedTransition.custom((values) => {
    'worklet'
    return {
      height: withTiming(values.targetHeight),
      width: withTiming(values.targetWidth),
      originX: withTiming(values.targetOriginX),
      originY: withTiming(values.targetOriginY),
      // height: withTiming(values.targetHeight, { duration: 300 }),
      // width: withTiming(values.targetWidth, { duration: 300 }),
      // originX: withTiming(values.targetOriginX, { duration: 300 }),
      // originY: withTiming(values.targetOriginY, { duration: 300 }),
      // originY: withSequence(
      //   withTiming(values.currentOriginY),
      //   //  + 50, {
      //   // duration: 300,
      //   // easing: Easing.linear,
      //   // }),
      //   withTiming(values.targetOriginY)
      // ),
      // , {
      // duration: 500,
      // easing: Easing.linear,
      // }
      // ),
      // ),
    }
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
    }
  })
  return (
    <SafeFullScreenLayout contentTw="bg-red-200 relative">
      <AppText>Shared two</AppText>
      <Go toScreen="shared-one">
        <AppText>Go to shared one</AppText>
      </Go>
      <Animated.View
        // tw="h-5 w-5 bg-sky-400"

        style={{
          position: 'absolute',
          top: 100,
          left: 50,
          width: 100,
          height: 100,
          backgroundColor: 'cyan',
        }}
        sharedTransitionTag="box"
        sharedTransitionStyle={transition}
      ></Animated.View>
    </SafeFullScreenLayout>
  )
}
