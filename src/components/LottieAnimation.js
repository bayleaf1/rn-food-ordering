import LottieView from 'lottie-react-native'
import { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView)

export default function LottieAnimation({ source, ctw, durationInMs = 1000 }) {
  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.loop(
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: durationInMs,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start()
  }, [durationInMs])

  return (
    <View tw={cn(ctw)}>
      <AnimatedLottieView tw="h-full w-full" source={source} progress={animationProgress.current} />
    </View>
  )
}
