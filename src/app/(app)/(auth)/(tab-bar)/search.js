import FadingOverlay from '@components/FadingOverlay'
import Food from '@components/Food/Food'
import SearchPanel from '@components/SearchPanel'
import LayoutForBottomTabs from '@layouts/LayoutForBottomTabs'
import { Algebra } from '@libs/Algebra'
import { FlatList } from 'react-native'
const COLUMNS_COUNT = 2
import AppText from '@components/AppText/AppText'

export default function Page() {
  let items = Food.Showcase.propsModels(10)
  return (
    <LayoutForBottomTabs contentTw="flex-1" verticalPartBottomSpace={0}>
      <SearchPanel />
      <FoodList items={items} itemsCount={items.length} />
    </LayoutForBottomTabs>
  )
}

function FoodList({ items = [], itemsCount = 0 }) {
  const renderItem = useCallback(
    ({ item, index }) => {
      let isLast = index === items.length - 1
      let isFirst = index === 0
      let isNotFirstFromRightColumn = index !== 1
      let isLeftColumn = index % 2 === 0
      let isRightColumn = !isLeftColumn

      let spaceLeftColumn = 'pr-2 pl-1'
      let spaceRightColumn = 'pl-2 pr-1'
      let spaceVertical = 'pb-4'

      function Placeholder() {
        return (
          <View
            style={{
              height: Algebra.percentageOf(LayoutForBottomTabs.defaultVerticalPartBottomSpace, 220),
            }}
          />
        )
      }

      return (
        <View
          tw={cn('w-full', {
            [spaceVertical]: true,
            [spaceLeftColumn]: isLeftColumn,
            [spaceRightColumn]: isRightColumn,
            '-mt-[104px]': isRightColumn && isNotFirstFromRightColumn,
          })}
        >
          {isFirst && (
            <AppText xl3 medium lineHeight={37} ctw={cn('mb-3 mt-0 self-start')}>
              Found {'\n'}
              {itemsCount} result
            </AppText>
          )}
          <Food.Showcase
            {...item}
            elevation={1}
            size="xs"
            titleSize={{ lg: true }}
            subtitleTw="mt-1"
            titleMtTw="-mt-3"
            containerTw="p-1"
            currencySize={{ sm: true }}
            priceSize={{ xl: true }}
            priceContainerTw={'mt-4'}
            valueTextSize={{ sm: true }}
            ratingIconTw={'h-[14px] w-[14px]'}
            ratingContainerTw={'mt-4'}
          />
          {isLast && <Placeholder />}
        </View>
      )
    },
    [itemsCount, items]
  )
  return (
    <View tw={cn('relative mt-4')}>
      <FadingOverlay />
      <FlatList
        style={{
          paddingTop: 30,
        }}
        data={items}
        numColumns={COLUMNS_COUNT}
        contentContainerStyle={{
          columnGap: 20,
        }}
        columnWrapperStyle={{
          flex: 1,
          width: '50%',
        }}
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
