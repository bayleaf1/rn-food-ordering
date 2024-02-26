import FadingOverlay from '@components/FadingOverlay'
import Food from '@components/Food/Food'
import LayoutForBottomTabs from '@layouts/LayoutForBottomTabs'
import { Algebra } from '@libs/Algebra'
import { FlatList } from 'react-native'

export default function Page() {
  let items = Food.Showcase.propsModels(10)
  return (
    <LayoutForBottomTabs contentTw="flex-1" verticalPartBottomSpace={0}>
      <FoodList items={items} itemsCount={items.length} />
    </LayoutForBottomTabs>
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
          <Food.CompactShowcase {...item} containerTw="p-1" />
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
    </View>
  )
}
