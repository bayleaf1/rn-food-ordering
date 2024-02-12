import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import Rhomb from '@components/Rhomb'
import ViewWithShadow from '@components/ViewWithShadow'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Animated, { SharedTransition, withTiming } from 'react-native-reanimated'

export default function FoodReview({}) {
  const transition = SharedTransition.custom((values) => {
    'worklet'
    return {
      height: withTiming(values.targetHeight),
      width: withTiming(values.targetWidth),
      originX: withTiming(values.targetOriginX),
      originY: withTiming(values.targetOriginY),
    }
  })

  return (
    <SafeFullScreenLayout contentTw="bg-gray-500x flex-1">
      <View tw={cn('flex flex-row justify-between')}>
        <Rhomb ctw={cn('h-[56px]')} squareTw="bg-white" elevation={2}>
          <Icon name="chevron-left" ctw={cn('h-8 w-8 -translate-x-0.5')} />
        </Rhomb>
        <Rhomb ctw={cn('h-[56px]')} squareTw="bg-white" elevation={2}>
          <Icon name="heart-grey" ctw={cn('h-6 w-6 translate-y-0.5')} />
        </Rhomb>
      </View>

      <LocalPicture
        name="egg-pasta"
        ctw={cn('bg-gray-400x mx-auto mt-4 h-[35%] w-[100%]')}
        imageResizeMode="contain"
      />

      <View tw={cn('mx-auto mt-4 flex flex-row items-center')}>
        <Rhomb ctw={cn('h-[55px]')} elevation={1}>
          <Writing xl2 ctw={cn('-translate-y-1 text-white')}>
            -
          </Writing>
        </Rhomb>
        <Writing xl ctw={cn('px-4 text-primary ')}>
          1
        </Writing>
        <Rhomb ctw={cn('h-[55px]')} elevation={1}>
          <Writing xl2 ctw={cn('-translate-y-1 text-white')}>
            +
          </Writing>
        </Rhomb>
      </View>

      <ViewWithShadow ctw={cn('mt-8 rounded-2xl p-4')}>
        <Writing ctw={cn('')}> Fast food </Writing>
        <View tw={cn('flex flex-row justify-between')}>
          <Writing ctw={cn('')}> Fried chicken </Writing>

          <View tw={cn('mt-3 flex flex-row items-center justify-center')}>
            <Icon name="rating-star" ctw="h-[18px] w-[18px]" />
            <Writing sm ctw={cn('ml-1 text-gray-400')}>
              {1}.0
            </Writing>
          </View>
        </View>

        <Writing ctw={cn('')} numberOfLines={4}>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
          ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit
          amet
        </Writing>
        <View tw={cn('flex flex-row items-center')}>
          <Writing sm ctw={cn('ml-1 text-gray-400')}>
            Delivery time
          </Writing>
          <View tw={cn('mt-3 ml-8 flex flex-row items-center')}>
            <Icon name="clock-red" ctw="h-[24px] w-[24px]" />
            <Writing sm semibold ctw={cn('ml-1 leading-[0.8em] text-black')}>
              25 mins
            </Writing>
          </View>
          {/* <Icon name="rating-star" ctw="h-[18px] w-[18px]" /> */}
        </View>
        <Writing sm ctw={cn('')}>
          Total price
        </Writing>

        <View tw={cn('flex flex-row items-center justify-between')}>
          <Writing ctw={cn('mt-3 text-primary')}>
            $ <Writing xl2>{23}</Writing>
          </Writing>

          <Rhomb ctw={cn('h-[64px]')} elevation={3}>
            <Icon name="cart" ctw={cn('h-8 w-8 translate-y-0.5 ')} iconElementTw='fill-white' />
          </Rhomb>
        </View>
      </ViewWithShadow>
    </SafeFullScreenLayout>
  )
}
