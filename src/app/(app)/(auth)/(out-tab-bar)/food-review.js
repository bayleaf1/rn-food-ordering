import Food from '@components/Food/Food'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import Rhomb from '@components/Rhomb'
import SpacerView from '@components/SpacerView'
import ViewWithShadow from '@components/ViewWithShadow'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import AppText from '@components/AppText/AppText'

export default function FoodReview({}) {

  return (
    <SafeFullScreenLayout contentTw="flex-1" headerIsShown>
      <PictureWithCounter></PictureWithCounter>
      <SpacerView />
      <Food.CardOverview></Food.CardOverview>
    </SafeFullScreenLayout>
  )
}

function Counter() {
  return (
    <View tw={cn('mx-auto mt-[5%] flex flex-row items-center ')}>
      <Rhomb ctw={cn('h-[55px]')} elevation={1}>
        <AppText xl2 ctw={cn(' text-white')}>
          -
        </AppText>
      </Rhomb>
      <AppText xl ctw={cn('px-4 text-primary ')}>
        1
      </AppText>
      <Rhomb ctw={cn('h-[55px]')} elevation={1}>
        <AppText xl2 ctw={cn('text-white')}>
          +
        </AppText>
      </Rhomb>
    </View>
  )
}

function PictureWithCounter() {
  return (
    <View tw={cn('bg-gray-300x relative flex-1')}>
      <LocalPicture
        name="egg-pasta"
        ctw={cn('mx-auto h-[95%] max-h-[320px] w-[100%] flex-shrink')}
        imageResizeMode="contain"
      />
      <Counter></Counter>
    </View>
  )
}

// function FoodOverviewCard() {
//   let categoryName = 'Fast food'
//   let foodName = 'Fried chicken'
//   let rating = 5
//   let foodDescription = `lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
//   dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet`
//   let deliveryMinutes = 25
//   let foodPrice = 21
//   return (
//     <ViewWithShadow ctw={cn('mt-auto rounded-2xl px-5 py-4')}>
//       <Header categoryName={categoryName} foodName={foodName} rating={rating}></Header>
//       <Description foodDescription={foodDescription}></Description>
//       <DeliveryDuration deliveryMinutes={deliveryMinutes}></DeliveryDuration>
//       <Footer foodPrice={foodPrice}></Footer>
//     </ViewWithShadow>
//   )
// }

// function Header(props) {
//   return (
//     <>
//       <AppText sm light ctw={cn('font-light text-black')}>
//         {props.categoryName}
//       </AppText>

//       <View tw={cn('mt-2 flex flex-row items-center justify-between')}>
//         <AppText lg ctw={cn('')}>
//           {props.foodName}
//         </AppText>

//         <Food.Rating value={props.rating} />
//       </View>
//     </>
//   )
// }

// function Description(props) {
//   return (
//     <AppText sm ctw={cn('mt-3 text-gray-600')} numberOfLines={3} children={props.foodDescription} />
//   )
// }

// function DeliveryDuration(props) {
//   return (
//     <View tw={cn('mt-4 flex flex-row flex-wrap items-center')}>
//       <AppText light ctw={cn('')}>
//         Delivery time
//       </AppText>
//       <View tw={cn(' ml-8 flex flex-row items-center')}>
//         <Icon name="clock-red" ctw="h-[24px] w-[24px]" />
//         <AppText sm semibold ctw={cn('ml-1 text-black')}>
//           {props.deliveryMinutes} mins
//         </AppText>
//       </View>
//     </View>
//   )
// }

// function Footer(props) {
//   return (
//     <>
//       <AppText xs semibold ctw={cn('mt-8')}>
//         Total price
//       </AppText>

//       <View tw={cn('mt-2 flex flex-row items-center justify-between')}>
//         <Food.Price value={props.foodPrice} />

//         <Rhomb ctw={cn('h-[64px]')} elevation={3}>
//           <Icon name="cart" ctw={cn('h-8 w-8 translate-y-0.5 ')} iconElementTw="fill-white" />
//         </Rhomb>
//       </View>
//     </>
//   )
// }
