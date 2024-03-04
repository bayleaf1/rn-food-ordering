import AnimationList from '@components/AnimationList/AnimationList'
import FadingOverlay from '@components/FadingOverlay'
import Food from '@components/Food/Food'
import ViewWithShadow from '@components/ViewWithShadow'
import Writing from '@components/Writing/Writing'
import LayoutForBottomTabs from '@layouts/LayoutForBottomTabs'
import { Algebra } from '@libs/Algebra'
import Go from '@libs/Navigation/Go'
import { FlatList } from 'react-native'

export default function Page() {
  let items = Food.Showcase.propsModels(10)
  return (
    <LayoutForBottomTabs contentTw="flex-1" verticalPartBottomSpace={0}>
      <View tw={cn('max-h-[75%] self-stretch pb-4')}>
        <FoodList items={items} itemsCount={items.length} />
      </View>

      <View tw={cn('flex-0 min-h-[100px]')}>
        <OrderDetails></OrderDetails>
      </View>
    </LayoutForBottomTabs>
  )
}

function OrderDetails() {
  return (
    <Card ctw={'flex h-[180px] flex-col justify-between'}>
      <Food.CardOverview.DeliveryDuration
        minutes={20}
        containerTw={'mt-0 justify-between'}
        iconTw={'w-[30px] h-[30px]'}
        durationSize={{
          md: true,
        }}
        labelWeight={{
          regular: true,
        }}
        labelSize={{
          lg: true,
        }}
      />
      <Food.CardOverview.TotalPriceWithAction
        price={22}
        actionElement={<Button label="Place order" screenNameToGoOnPress={'select-address'} />}
        currencySize={{
          xl2: true,
        }}
        priceSize={{
          xl5: true,
        }}
        labelSize={{
          sm: true,
        }}
        labelTw={'mt-0'}
        bottomSectionTw={'mt-0'}
        currencyLineHeight={30}
      />
    </Card>
  )
}

function Button({ label, ctw, screenNameToGoOnPress, variant = 'contained' }) {
  let style = {
    contained: {
      viewTw: `bg-primary p-3 px-6`,
      labelTw: `text-white`,
    },
    outlined: {
      viewTw: `bg-transparent p-3 px-6 border border-primary`,
      labelTw: `text-primary`,
    },
  }[variant]

  return (
    <AnimationList.ZoomOutOnPress
      goToScreen={() => screenNameToGoOnPress && Go.toScreen(screenNameToGoOnPress)}
    >
      <View tw={cn('rounded-lg', style.viewTw, ctw)}>
        <Writing ctw={cn(style.labelTw)}>{label}</Writing>
      </View>
    </AnimationList.ZoomOutOnPress>
  )
}
Button.Outlined = ({ label, ctw, screenNameToGoOnPress }) => {
  return <Button {...{ label, ctw, screenNameToGoOnPress }} variant="outlined" />
}

function Card({ children, ctw, elevation = 1 }) {
  return (
    <ViewWithShadow ctw={cn('rounded-xl p-4', ctw)} elevation={elevation}>
      {children}
    </ViewWithShadow>
  )
}
function FoodList({ items = [], itemsCount = 0 }) {
  const renderItem = useCallback(
    ({ item, index }) => {
      let isLast = index === items.length - 1

      let spaceVertical = 'pb-6'

      function Placeholder() {
        return (
          <View
            style={{
              height: Algebra.percentageOf(LayoutForBottomTabs.defaultVerticalPartBottomSpace, 40),
            }}
          />
        )
      }

      return (
        <View tw={cn('w-full px-1', spaceVertical)}>
          <Food.CompactShowcase
            {...item}
            elementNearTitle={
              <Writing sm ctw="self-start text-primary">
                x{2}
              </Writing>
            }
            containerTw="p-1"
          />
          {isLast && <Placeholder />}
        </View>
      )
    },
    [itemsCount, items]
  )
  return (
    <View tw={cn('relative mt-2')}>
      <FadingOverlay />
      <FlatList
        style={{
          paddingTop: 30,
        }}
        data={items}
        windowSize={10}
        bouncesZoom={false}
        alwaysBounceVertical={false}
        overScrollMode="never"
        keyExtractor={(_, index) => index}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <FadingOverlay direction="bottom->top" />
    </View>
  )
}
