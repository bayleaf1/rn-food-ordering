import Button from '@components/Button'
import LottieAnimation from '@components/LottieAnimation'
import AppText from '@components/AppText/AppText'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { Screens } from '@libs/Navigation/ScreenList'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'


export default function ShowDelivery({}) {
  const { replace } = useRouter()

    useEffect(() => {
      setTimeout(() => {
        replace(Screens.home)
      }, 1000 * 4)
    }, [])

  return (
    <SafeFullScreenLayout headerIsShown={false} contentTw="flex-1">
      <LottieAnimation
        ctw="h-[500px]"
        source={require('@assets/lotties/delivery.json')}
        durationInMs={3000}
      />
      <View tw={cn('flex-1')}>
        <AppText xl2 semibold ctw={cn('text-center text-primary')}>
          {' '}
          Your food is on the way{' '}
        </AppText>
        <AppText size="lg"ctw={cn('mt-3 text-center')}>
          {' '}
          Estimated time: 25 min{' '}
        </AppText>
      </View>

      <Button.Outlined label={'Return to home screen'} fullWidth screenNameToGoOnPress={'home'} />
    </SafeFullScreenLayout>
  )
}

