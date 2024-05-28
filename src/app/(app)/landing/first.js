import LottieAnimation from '@components/LottieAnimation'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { Screens } from '@libs/Navigation/ScreenList'
import LandingAnimatedText from '@screens/landing/LandingAnimatedText'
import useLandingRedirectWithDelay from '@screens/landing/useLandingRedirectWithDelay'

const SCREEN_CHANING_DELAY = 500

export default function First({}) {
  useLandingRedirectWithDelay(
    Screens['landing-second'],
    LandingAnimatedText.animationDurationMs + SCREEN_CHANING_DELAY
  )

  return (
    <SafeFullScreenLayout visibleAreaTw={'bg-white'} contentTw="flex-1">
      <LottieAnimation
        source={require('@assets/lotties/ordering.json')}
        durationInMs={5000}
        ctw={'bg-gray-200x h-[50%]'}
      />

      <LandingAnimatedText title={'here you can get'} subtitle={'breakfast, lunch or dinner'} />
    </SafeFullScreenLayout>
  )
}
