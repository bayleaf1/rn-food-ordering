import LottieAnimation from '@components/LottieAnimation'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Screens from '@libs/Navigation/ScreenList'
import LandingAnimatedText from '@screens/landing/LandingAnimatedText'
import useLandingRedirectWithDelay from '@screens/landing/useLandingRedirectWithDelay'

const SCREEN_CHANING_DELAY = 500

export default function First({}) {
  useLandingRedirectWithDelay(
    Screens['landing-third'],
    LandingAnimatedText.animationDurationMs + SCREEN_CHANING_DELAY
  )

  return (
    <SafeFullScreenLayout visibleAreaTw={'bg-white'} contentTw="flex-1">
      <View tw={cn('mt-[20%]')}>
        <LandingAnimatedText title={'you can order'} subtitle={'fastfood, snacks, or drinks'} />
      </View>

      <View tw={cn('flex-1 justify-center')}>
        <LottieAnimation
          source={require('@assets/lotties/food-choosing.json')}
          durationInMs={4500}
          ctw={'bg-gray-200x mb-[40%] h-[50%]'}
        />
      </View>
    </SafeFullScreenLayout>
  )
}
