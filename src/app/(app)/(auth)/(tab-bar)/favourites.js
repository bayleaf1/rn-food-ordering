import Food from '@components/Food/Food'
import SearchPanel from '@components/SearchPanel'
import LayoutForBottomTabs from '@layouts/LayoutForBottomTabs'
import { Algebra } from '@libs/Algebra'
import { useAppTheme } from '@providers/AppTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { FlatList } from 'react-native'
import Go from '@libs/Navigation/Go'
import ViewWithShadow from '@components/ViewWithShadow'
import LocalPicture from '@components/Pictures/LocalPicture'
import Writing from '@components/Writing/Writing'
import Icon from '@components/Pictures/Icon'

const COLUMNS_COUNT = 1

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
      let isFirst = index === 0
      let isNotFirstFromRightColumn = index !== 1
      let isLeftColumn = index % 2 === 0
      let isRightColumn = !isLeftColumn

      let spaceLeftColumn = 'pr-2 pl-1'
      let spaceRightColumn = 'pl-2 pr-1'
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
        numColumns={COLUMNS_COUNT}
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
//TODO REAFCATOR
function FadingOverlay({ color }) {
  const { theme } = useAppTheme()
  if (!color) color = theme.colors.background

  return (
    <LinearGradient
      colors={[color, 'transparent']}
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

          <View tw={cn('self-start translate-x-2')}>
            <Icon name="close" />
          </View>
        </View>
      </ViewWithShadow>
    </Go>
  )
}
