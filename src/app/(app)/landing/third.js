import Button from '@components/Button'
import LottieAnimation from '@components/LottieAnimation'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { Screens } from '@libs/Navigation/ScreenList'
import LandingAnimatedText from '@screens/landing/LandingAnimatedText'
import { useRouter } from 'expo-router'
import Animated, { Easing, FadeIn } from 'react-native-reanimated'

const DELAY_BEFORE_BUTTON_APPEARING = 500

export default function First({}) {
  const { replace } = useRouter()
  return (
    <SafeFullScreenLayout visibleAreaTw={'bg-white'} contentTw="flex-1 ">
      <LottieAnimation
        source={require('@assets/lotties/food-delivery.json')}
        durationInMs={5000}
        ctw={'bg-gray-200x h-[50%]'}
      />

      <LandingAnimatedText title={'and we will deliver'} subtitle={'to your address!'} />

      <View tw={cn('mb-[10%] flex-1 justify-end')}>
        <Animated.View
          tw={cn('')}
          entering={FadeIn.delay(
            LandingAnimatedText.animationDurationMs + DELAY_BEFORE_BUTTON_APPEARING
          )
            .duration(1000)
            .easing(Easing.out(Easing.ease))}
        >
          <Button label={`Let's start`} fullWidth onPress={() => replace(Screens.home)} />
        </Animated.View>
      </View>
    </SafeFullScreenLayout>
  )
}
