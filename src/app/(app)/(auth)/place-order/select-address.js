import AnimationList from '@components/AnimationList/AnimationList'
import Button from '@components/Button'
import Card from '@components/Card'
import FadingOverlay from '@components/FadingOverlay'
import Food from '@components/Food/Food'
import Radio from '@components/FormRelated/Radio'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import Rhomb from '@components/Rhomb'
import Ripple from '@components/Ripple'
import SpacerView from '@components/SpacerView'
import ViewWithShadow from '@components/ViewWithShadow'
import Writing from '@components/Writing/Writing'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import React from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

export default function SelectAddress({}) {
  const [checked, setChecked] = React.useState('first')
  return (
    <SafeFullScreenLayout contentTw="flex-1 bg-gray-100x" headerIsShown>
      <Button.Outlined
        renderLabel={({ labelTw }) => (
          <View ctw={'flex flex-row items-center bg-gray-600'} style={{ flexDirection: 'row' }}>
            <Icon name="plus" ctw={'mr-2 mt-[3px] h-4 w-4 '} iconElementTw={labelTw} />
            <Writing sm ctw={cn('relative self-start', labelTw)}>
              Add New Address
            </Writing>
          </View>
        )}
        screenNameToGoOnPress={'select-address'}
        ctw={'self-center'}
      />
      <View tw={cn('relative flex-1 overflow-visible')}>
        <FadingOverlay height={30} />
        <FadingOverlay height={30} direction="bottom->top" />

        <ScrollView
          tw={cn('bg-gray-400x relative flex-1 overflow-x-visible mt-2')}
          removeClippedSubviews={false}
          contentContainerStyle={{ rowGap: 20, position: 'relative', paddingHorizontal: 10, paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2, 1, 1, 1, 1, 1, 1, 1, 1].map((item, key) => (
            <Card ctw={cn(key === 0 && 'mt-[30px]')} key={key} onPress={() => setChecked(item)}>
              <View tw={cn('flex flex-row justify-between')}>
                <Writing semibold ctw={cn('')}>
                  My home address
                </Writing>
                <View tw={cn('rounded-fullx bg-gray-200x')}>
                  <Radio checked={item === checked} onPress={() => setChecked(item)} />
                </View>
              </View>
              <Writing sm ctw={cn('text-gray-400')}>
                Home
              </Writing>
              <Writing sm ctw={cn('mt-3 text-gray-400')} numberOfLines={2} additionalLineHeight={2}>
                (503) 338-5200 15612 Fisher Island Dr Miami Beach, Florida(FL), 33109
              </Writing>
            </Card>
          ))}
        </ScrollView>
      </View>

      <Button label={'Done'} ctw="mt-10" fullWidth />
    </SafeFullScreenLayout>
  )
}

// function Counter() {
//   return (
//     <View tw={cn('mx-auto mt-[5%] flex flex-row items-center ')}>
//       <Rhomb ctw={cn('h-[55px]')} elevation={1}>
//         <Writing xl2 ctw={cn(' text-white')}>
//           -
//         </Writing>
//       </Rhomb>
//       <Writing xl ctw={cn('px-4 text-primary ')}>
//         1
//       </Writing>
//       <Rhomb ctw={cn('h-[55px]')} elevation={1}>
//         <Writing xl2 ctw={cn('text-white')}>
//           +
//         </Writing>
//       </Rhomb>
//     </View>
//   )
// }

// function PictureWithCounter() {
//   return (
//     <View tw={cn('bg-gray-300x relative flex-1')}>
//       <LocalPicture
//         name="egg-pasta"
//         ctw={cn('mx-auto h-[95%] max-h-[320px] w-[100%] flex-shrink')}
//         imageResizeMode="contain"
//       />
//       <Counter></Counter>
//     </View>
//   )
// }

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
//       <Writing sm light ctw={cn('font-light text-black')}>
//         {props.categoryName}
//       </Writing>

//       <View tw={cn('mt-2 flex flex-row items-center justify-between')}>
//         <Writing lg ctw={cn('')}>
//           {props.foodName}
//         </Writing>

//         <Food.Rating value={props.rating} />
//       </View>
//     </>
//   )
// }

// function Description(props) {
//   return (
//     <Writing sm ctw={cn('mt-3 text-gray-600')} numberOfLines={3} children={props.foodDescription} />
//   )
// }

// function DeliveryDuration(props) {
//   return (
//     <View tw={cn('mt-4 flex flex-row flex-wrap items-center')}>
//       <Writing light ctw={cn('')}>
//         Delivery time
//       </Writing>
//       <View tw={cn(' ml-8 flex flex-row items-center')}>
//         <Icon name="clock-red" ctw="h-[24px] w-[24px]" />
//         <Writing sm semibold ctw={cn('ml-1 text-black')}>
//           {props.deliveryMinutes} mins
//         </Writing>
//       </View>
//     </View>
//   )
// }

// function Footer(props) {
//   return (
//     <>
//       <Writing xs semibold ctw={cn('mt-8')}>
//         Total price
//       </Writing>

//       <View tw={cn('mt-2 flex flex-row items-center justify-between')}>
//         <Food.Price value={props.foodPrice} />

//         <Rhomb ctw={cn('h-[64px]')} elevation={3}>
//           <Icon name="cart" ctw={cn('h-8 w-8 translate-y-0.5 ')} iconElementTw="fill-white" />
//         </Rhomb>
//       </View>
//     </>
//   )
// }
