import Icon from '@components/Pictures/Icon'
import ViewWithShadow from '@components/ViewWithShadow'
import Go from '@libs/Navigation/Go'
import LocalPicture from '@components/Pictures/LocalPicture'

export default function Food({}) {
  return <View tw={cn('')}></View>
}

Food.Rating = ({ value = 0, iconTw, containerTw, valueTextSize = { md: true } }) => (
  <View tw={cn('flex flex-row items-center justify-center self-center', containerTw)}>
    <Icon name="rating-star" ctw={cn('h-[22px] w-[22px]', iconTw)} />
    <Writing {...valueTextSize} ctw={cn('ml-1 text-gray-400')}>
      {value}.0
    </Writing>
  </View>
)

Food.Price = ({ containerTw, priceTw, value, currencySize = {}, priceSize = { xl2: true } }) => (
  <View tw={cn('mt-6', containerTw)}>
    <Writing {...currencySize} ctw={cn('text-primary')}>
      ${' '}
      <Writing {...priceSize} ctw={cn('text-black', priceTw)}>
        {value}
      </Writing>
    </Writing>
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
    <Go toScreen="food-review">
      <ViewWithShadow
        elevation={elevation}
        ctw={cn('w-full items-center self-start rounded-3xl p-4', containerTw, 'pt-0')}
      >
        <LocalPicture name={imageName} ctw="h-[200px] self-stretch" imageResizeMode="contain" />
        <Writing {...titleSize} ctw={cn(titleMtTw)}>
          {name}
        </Writing>

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
    </Go>
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

Food.CompactShowcase = ({ name, imageName, containerTw }) => {
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
            <Writing lg>{name}</Writing>

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
