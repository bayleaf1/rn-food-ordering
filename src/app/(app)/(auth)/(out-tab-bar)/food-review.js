import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import Rhomb from '@components/Rhomb'
import SpacerView from '@components/SpacerView'
import ViewWithShadow from '@components/ViewWithShadow'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'

export default function FoodReview({}) {
  return (
    <SafeFullScreenLayout contentTw="flex-1" headerIsShown>
      {/* <Header></Header> */}

      <PictureWithCounter></PictureWithCounter>

      <SpacerView />

      <FoodOverview></FoodOverview>
    </SafeFullScreenLayout>
  )
}

function Counter() {
  return (
    <View tw={cn('mx-auto mt-[5%] flex flex-row items-center ')}>
      <Rhomb ctw={cn('h-[55px]')} elevation={1}>
        <Writing xl2 ctw={cn(' text-white')}>
          -
        </Writing>
      </Rhomb>
      <Writing xl ctw={cn('px-4 text-primary ')}>
        1
      </Writing>
      <Rhomb ctw={cn('h-[55px]')} elevation={1}>
        <Writing xl2 ctw={cn('text-white')}>
          +
        </Writing>
      </Rhomb>
    </View>
  )
}

function PictureWithCounter() {
  return (
    <View tw={cn('bg-gray-300x relative flex-1')}>
      <LocalPicture
        name="egg-pasta"
        ctw={cn('bg-gray-400x mx-auto mt-4 h-[95%] max-h-[320px] w-[100%] flex-shrink')}
        imageResizeMode="contain"
      />
      <Counter></Counter>
    </View>
  )
}

function FoodOverview() {
  return (
    <ViewWithShadow ctw={cn('mt-auto rounded-2xl px-5 py-4')}>
      <Writing sm light ctw={cn('font-light text-black')}>
        Fast food
      </Writing>

      <View tw={cn('mt-2 flex flex-row items-center justify-between')}>
        <Writing lg ctw={cn('')}>
          Fried chicken
        </Writing>

        <View tw={cn('flex flex-row items-center justify-center self-center')}>
          <Icon name="rating-star" ctw="h-[22px] w-[22px]" />
          <Writing md ctw={cn('ml-1 text-gray-400')}>
            {1}.0
          </Writing>
        </View>
      </View>

      <Writing sm ctw={cn('mt-3 text-gray-600')} numberOfLines={3}>
        lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
        dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet
      </Writing>

      <View tw={cn('mt-4 flex flex-row flex-wrap items-center')}>
        <Writing light ctw={cn('')}>
          Delivery time
        </Writing>
        <View tw={cn(' ml-8 flex flex-row items-center')}>
          <Icon name="clock-red" ctw="h-[24px] w-[24px]" />
          <Writing sm semibold ctw={cn('ml-1 text-black')}>
            25 mins
          </Writing>
        </View>
      </View>
      <Writing xs semibold ctw={cn('mt-8')}>
        Total price
      </Writing>

      <View tw={cn('mt-2 flex flex-row items-center justify-between')}>
        <Writing ctw={cn('mt-3 text-primary')}>
          ${' '}
          <Writing xl2 ctw={cn('text-black')}>
            {23}
          </Writing>
        </Writing>

        <Rhomb ctw={cn('h-[64px]')} elevation={3}>
          <Icon name="cart" ctw={cn('h-8 w-8 translate-y-0.5 ')} iconElementTw="fill-white" />
        </Rhomb>
      </View>
    </ViewWithShadow>
  )
}
