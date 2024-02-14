import Icon from '@components/Pictures/Icon'

export default function Food({}) {
  return <View tw={cn('')}></View>
}

Food.Rating = ({ value = 0, iconTw }) => (
  <View tw={cn('flex flex-row items-center justify-center self-center')}>
    <Icon name="rating-star" ctw={cn('h-[22px] w-[22px]', iconTw)} />
    <Writing md ctw={cn('ml-1 text-gray-400')}>
      {value}.0
    </Writing>
  </View>
)

Food.Price = ({ containerTw, priceTw, value }) => (
  <View tw={cn('mt-3', containerTw)}>
    <Writing ctw={cn('mt-3 text-primary')}>
      ${' '}
      <Writing xl2 ctw={cn('text-black', priceTw)}>
        {value}
      </Writing>
    </Writing>
  </View>
)
