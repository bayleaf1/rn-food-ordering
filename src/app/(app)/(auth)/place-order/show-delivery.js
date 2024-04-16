import Button from '@components/Button'
import LottieAnimation from '@components/LottieAnimation'
import Writing from '@components/Writing/Writing'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Screens from '@libs/Navigation/ScreenList'
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
        <Writing xl2 semibold ctw={cn('text-center text-primary')}>
          {' '}
          Your food is on the way{' '}
        </Writing>
        <Writing lg ctw={cn('mt-3 text-center')}>
          {' '}
          Estimated time: 25 min{' '}
        </Writing>
      </View>

      <Button.Outlined label={'Return to home screen'} fullWidth screenNameToGoOnPress={'home'} />
    </SafeFullScreenLayout>
  )
}

