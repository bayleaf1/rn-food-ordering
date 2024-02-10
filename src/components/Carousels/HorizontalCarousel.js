import DeviceMeta from '@libs/DeviceMeta'
import { Animated } from 'react-native'

const width = DeviceMeta.windowWidth()

let WIDTH = width
const PLACEHOLDER_ITEM = { spacer: true }

export default function HorizontalCarousel({
  swipeItemsOneByOne = true,
  swipeSpeed = 0.8,
  items = [],
  NORMALIZED_ITEM_WIDTH = 0.5,
  HORIZONTAL_SPACE = 20,
  renderItem = ({ item, index }) => <View />,
  contentContainerStyle = {}
}) {
  const scrollX = useRef(new Animated.Value(0)).current

  const ITEM_SIZE =
    width * DeviceMeta.iosOrOther(NORMALIZED_ITEM_WIDTH, NORMALIZED_ITEM_WIDTH + 0.02)
  const SPACER_ITEM_SIZE = WIDTH - ITEM_SIZE
  const FRAMES_PER_SECOND = 60

  const SNAP_INTERVAL = ITEM_SIZE + HORIZONTAL_SPACE * 2
  const PLACEHOLDER_ITEM_WIDTH = SPACER_ITEM_SIZE - HORIZONTAL_SPACE * 2
  return (
    <View style={{ width: WIDTH }}>
      <Animated.FlatList
        horizontal
        bounces={false}
        renderToHardwareTextureAndroid
        disableIntervalMomentum={swipeItemsOneByOne}
        decelerationRate={DeviceMeta.iosOrOther(0, swipeSpeed)}
        snapToInterval={SNAP_INTERVAL}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={FRAMES_PER_SECOND}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: true,
        })}
        keyExtractor={(_item, index) => index}
        snapToAlignment={'start'}
        data={[...items, PLACEHOLDER_ITEM]}
        contentContainerStyle={{ alignItems: 'flex-end', ...contentContainerStyle  }}
        renderItem={({ index, item }) => {
          if (Object.is(item, PLACEHOLDER_ITEM))
            return <View style={{ width: PLACEHOLDER_ITEM_WIDTH }} />

          const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE]

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 0.8, 1],
            extrapolate: 'clamp',
          })

          const translateY = 0;
          //  scrollX.interpolate({
          //   inputRange,
          //   outputRange: [100, 47, 0],
          //   extrapolate: 'clamp',
          // })

          return (
            <Animated.View
              style={{
                width: ITEM_SIZE,
                marginHorizontal: HORIZONTAL_SPACE,
                transform: [{ scale }, { translateY }],
              }}
            >
              {renderItem({ item, index })}
            </Animated.View>
          )
        }}
      />
    </View>
  )
}
