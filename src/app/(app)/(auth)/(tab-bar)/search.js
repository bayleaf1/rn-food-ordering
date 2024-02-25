import Food from '@components/Food/Food'
import SearchPanel from '@components/SearchPanel'
import LayoutForBottomTabs from '@layouts/LayoutForBottomTabs'
import { Algebra } from '@libs/Algebra'
import { useAppTheme } from '@providers/AppTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { FlatList } from 'react-native'
const COLUMNS_COUNT = 2

export default function Page() {
  let columnOneItems = Food.Showcase.propsModels(100)
  const { theme } = useAppTheme()
  let itemsCount = 90
  const renderItem = useCallback(
    ({ item, index }) => {
      // console.log(`props:`, props);
      let isLast = index === 100 - 1
      let isFirst = index === 0
      let isNotFirstFromRightColumn = index !== 1
      let isLeftColumn = index % 2 === 0
      let isRightColumn = !isLeftColumn

      let spaceLeftColumn = 'pr-2 pl-1'
      let spaceRightColumn = 'pl-2 pr-1'
      let spaceVertical = 'pb-4'

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
            <Writing xl3 medium lineHeight={37} ctw={cn('mb-3 mt-0 self-start')}>
              Found {'\n'}
              {itemsCount} result
            </Writing>
          )}
          <Food.Showcase
            {...item}
            elevation={1}
            subtitleSize={{ xs: true }}
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
          {isLast && (
            <View
              style={{
                height: Algebra.percentageOf(
                  LayoutForBottomTabs.defaultVerticalPartBottomSpace,
                  200
                ),
              }}
            ></View>
          )}
        </View>
      )
    },
    [itemsCount, columnOneItems]
  )
  return (
    <LayoutForBottomTabs contentTw="flex-1" verticalPartBottomSpace={0}>
      <SearchPanel />
      <View tw={cn('relative mt-4')}>
        <FaddingBaner background={theme.colors.background} />
        <FlatList
          style={{ backgroundColorX: 'blue', paddingTop: 30 }}
          data={columnOneItems}
          numColumns={COLUMNS_COUNT}
          contentContainerStyle={{ columnGap: 20 }}
          columnWrapperStyle={{
            flex: 1,
            width: '50%',
          }}
          windowSize={20}
          // maxToRenderPerBatch={5}
          keyExtractor={(_, index) => index}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
      </View>
    </LayoutForBottomTabs>
  )
}

function renderItem({ item, index }) {
  // console.log(`props:`, props);
  let isLast = index === 100 - 1
  let isFirst = index === 0
  let isNotFirstFromRightColumn = index !== 1
  let isLeftColumn = index % 2 === 0
  let isRightColumn = !isLeftColumn

  let spaceLeftColumn = 'pr-2 pl-1'
  let spaceRightColumn = 'pl-2 pr-1'
  let spaceVertical = 'pb-4'

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
        <Writing xl3 medium lineHeight={37} ctw={cn('mb-3 mt-0 self-start')}>
          Found {'\n'}
          {999} result
        </Writing>
      )}
      <Food.Showcase
        {...item}
        elevation={1}
        subtitleSize={{ xs: true }}
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
      {isLast && (
        <View
          style={{
            height: Algebra.percentageOf(LayoutForBottomTabs.defaultVerticalPartBottomSpace, 200),
          }}
        ></View>
      )}
    </View>
  )
}
function FaddingBaner(props) {
  return (
    <LinearGradient
      colors={[props.background, 'transparent']}
      style={{
        position: 'absolute',
        top: 0,
        height: 20,
        width: '100%',
        zIndex: 1,
      }}
    />
  )
}
