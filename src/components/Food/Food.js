import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import ViewWithShadow from '@components/ViewWithShadow'
import Go from '@libs/Navigation/Go'
import AppText from '@components/AppText/AppText'

import Rhomb from '@components/Rhomb'
import { hp } from '@libs/Styling'

export default function Food({}) {
  return <View tw={cn('')}></View>
}

Food.Rating = ({ value = 0, iconTw, containerTw, valueTextSize = { md: true } }) => (
  <View tw={cn('flex flex-row items-center justify-center self-center', containerTw)}>
    <Icon name="rating-star" ctw={cn('h-[22px] w-[22px]', iconTw)} />
    <AppText {...valueTextSize} ctw={cn('ml-1 text-gray-400')}>
      {value}.0
    </AppText>
  </View>
)

Food.Price = ({
  containerTw,
  priceTw,
  value,
  currencyLineHeight,
  currencySize = {},
  priceSize = { xl2: true },
}) => (
  <View tw={cn('mt-6', containerTw)}>
    <AppText {...currencySize} lineHeight={currencyLineHeight} ctw={cn('text-primary')}>
      ${' '}
      <AppText {...priceSize} ctw={cn('text-black', priceTw)}>
        {value}
      </AppText>
    </AppText>
  </View>
)

Food.Showcase = ({
  name,
  imageName,
  titleSize = { xl: true },
  currencySize,
  priceSize,
  titleMtTw = 'mt-4',
  priceContainerTw,
  ratingIconTw,
  valueTextSize,
  containerTw,
  elevation = 2,
  ratingContainerTw,
}) => {
  return (
    // <Go toScreen="food-review">
    <ViewWithShadow
      elevation={elevation}
      // style={{maxHeight: hp(60)}}
      ctw={cn(
        'w-full h-full flex-1 items-center flex-0 self-start rounded-3xl p-4',
        containerTw,
        'pt-0'
      )}
    >
      <LocalPicture
        // style={{ height: hp(20) }}
        name={imageName}
        ctw="h-[200px] self-stretch"
        imageResizeMode="contain"
      />
      <AppText {...titleSize} ctw={cn(titleMtTw)}>
        {name}
      </AppText>

      <Food.Rating
        value={2}
        iconTw={cn('h-[18px] w-[18px]', ratingIconTw)}
        valueTextSize={valueTextSize}
        containerTw={ratingContainerTw}
      />
      <Food.Price
        value={15}
        priceTw={'text-primary'}
        currencySize={currencySize}
        priceSize={priceSize}
        containerTw={priceContainerTw}
      />
    </ViewWithShadow>
    // </Go>
  )
}

Food.Showcase.propsModel = Object.freeze({
  name: 'Egg pasta',
  imageName: 'egg-pasta',
  secondName: 'Spicy Chicken Pasta',
  grade: 5,
  price: 15,
})

Food.Showcase.propsModels = (count = 3) => new Array(count).fill(Food.Showcase.propsModel)

Food.CompactShowcase = ({ name, imageName, elementNearTitle, containerTw }) => {
  return (
    <Go toScreen="food-review">
      <ViewWithShadow elevation={1} ctw={cn('rounded-3xl', containerTw)}>
        <View tw={cn('flex-row items-center self-start p-0.5 pr-4')}>
          <LocalPicture
            name={imageName}
            ctw="h-[120px] w-[120px] self-stretch"
            imageResizeMode="contain"
          />

          <View tw={cn('mt-3 ml-3 grow')}>
            <View tw={cn('flex flex-row justify-between')}>
              <AppText size="lg"ctw="inline self-start">
                {name}
              </AppText>
              {elementNearTitle}
            </View>

            <View tw={cn('bg-gray-600x mt-2 flex flex-row justify-between')}>
              <Food.Price
                value={15}
                priceTw={'text-black'}
                containerTw={'self-center bg-gray-100x'}
              />
              <Food.Rating
                value={2}
                iconTw={cn('h-[18px] w-[18px]')}
                containerTw={'self-center mt-4'}
              />
            </View>
          </View>

          <View tw={cn('translate-x-2 self-start')}>
            <Icon name="close" />
          </View>
        </View>
      </ViewWithShadow>
    </Go>
  )
}

Food.CompactShowcase.propsModels = Food.Showcase.propsModels

Food.CardOverview = () => {
  let categoryName = 'Fast food'
  let foodName = 'Fried chicken'
  let rating = 5
  let foodDescription = `lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
  dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum dolor sit amet`
  let deliveryMinutes = 25
  let foodPrice = 21

  function Header(props) {
    return (
      <>
        <AppText size="sm"light ctw={cn('font-light text-black')}>
          {props.categoryName}
        </AppText>

        <View tw={cn('mt-2 flex flex-row items-center justify-between')}>
          <AppText size="lg"ctw={cn('')}>
            {props.foodName}
          </AppText>

          <Food.Rating value={props.rating} />
        </View>
      </>
    )
  }
  function Description(props) {
    return (
      <AppText
        sm
        ctw={cn('mt-3 text-gray-600')}
        numberOfLines={3}
        children={props.foodDescription}
      />
    )
  }
  return (
    <ViewWithShadow ctw={cn('mt-auto rounded-2xl px-5 py-4')}>
      <Header categoryName={categoryName} foodName={foodName} rating={rating}></Header>
      <Description foodDescription={foodDescription}></Description>
      <Food.CardOverview.DeliveryDuration minutes={deliveryMinutes} />
      <Food.CardOverview.TotalPriceWithAction
        price={foodPrice}
        actionElement={
          <Rhomb ctw={cn('h-[64px]')} elevation={3}>
            <Icon name="cart" ctw={cn('h-8 w-8 translate-y-0.5 ')} iconElementTw="fill-white" />
          </Rhomb>
        }
      />
    </ViewWithShadow>
  )
}

Food.CardOverview.DeliveryDuration = ({
  minutes,
  containerTw,
  iconTw,
  durationSize = { sm: true },
  labelWeight = { light: true },
  labelSize = {},
}) => {
  return (
    <View tw={cn('mt-4 flex flex-row flex-wrap items-center', containerTw)}>
      <AppText {...labelWeight} {...labelSize} ctw={cn('')}>
        Delivery time
      </AppText>
      <View tw={cn(' ml-8 flex flex-row items-center')}>
        <Icon name="clock-red" ctw={cn('h-[24px] w-[24px]', iconTw)} />
        <AppText {...durationSize} medium ctw={cn('ml-1 text-black')}>
          {minutes} mins
        </AppText>
      </View>
    </View>
  )
}

Food.CardOverview.TotalPriceWithAction = ({
  price,
  actionElement,
  labelSize="xs",
  currencySize = {},
  priceSize = { xl2: true },
  labelTw,
  bottomSectionTw,
  currencyLineHeight,
}) => {
  return (
    <View>
      <AppText {...labelSize} semibold ctw={cn('mt-8', labelTw)}>
        Total price
      </AppText>

      <View tw={cn('mt-2 flex flex-row items-center justify-between', bottomSectionTw)}>
        <Food.Price
          value={price}
          currencyLineHeight={currencyLineHeight}
          currencySize={currencySize}
          priceSize={priceSize}
        />
        {actionElement}
      </View>
    </View>
  )
}
