import ViewWithShadow from '@components/ViewWithShadow'
import WritingInput from '@components/FormRelated/WritingInput'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import Writing from '@components/Writing/Writing'
import { GLOBAL_CONFIG } from '@config/globalConfig'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import useApi from '@libs/Api'
import Go from '@libs/Navigation/Go'
import { useScreenOrientationProvider } from '@providers/ScreenOrientationProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import { Link } from 'expo-router'
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
// import Carousel from 'react-native-reanimated-carousel'
const categories = [
  ['burger', 'Fast food'],
  ['coffe', 'Drink'],
  ['snacks', 'Snacks'],
]

function Food() {
  return (
    <ViewWithShadow
      elevation={3}
      ctw="w-fullx max-w-[70%]x w-[250px] items-center self-start  rounded-3xl p-4  pt-0"
    >
      <LocalPicture name="egg-pasta" ctw="h-[200px] w-full" imageResizeMode="contain" />
      <Writing xl ctw={cn('mt-4')}>
        Egg pasta
      </Writing>
      <Writing sm ctw={cn('mt-2 text-gray-400')}>
        Spicy Chicken Pasta
      </Writing>

      <View tw={cn('mt-2 flex flex-row items-center justify-center')}>
        <Icon name="rating-star" ctw="h-[18px] w-[18px]" />
        <Writing sm ctw={cn('ml-1 text-gray-400')}>
          5.0
        </Writing>
      </View>

      <Writing ctw={cn('mt-2 text-primary')}>
        $ <Writing xl2>15.00</Writing>
      </Writing>
    </ViewWithShadow>
  )
}
function onChange(params) {
  let { viewableItems } = params
  console.log(`params:`, params, viewableItems)
}
export default function Page() {
  let { signOut } = useSessionProvider()
  let { setLanguageAndSaveToStorage, AvailableLanguages } = useTranslationProvider()
  let { portraitOrLandscape } = useScreenOrientationProvider()

  let { data, statusCode } = useApi('/todos/1', { defaultData: {} })
  // let { data } = useApi(Endpoints.me.value(), { defaultData: {} })

  return (
    <SafeFullScreenLayout visibleAreaTw={'bg-gray-25'} contentTw="bg-gray-25x">
      <Title />

      <SearchPanel />

      <FoodCategories categories={categories} />

      {/* <Carousel
        width={width}
        data={[{ color: 'red' }, { color: 'purple' }, { color: 'yellow' }]}
        renderItem={({ color }) => {
          return <View style={{ backgroundColor: color, flex: 1 }} />
        }}
      /> */}
      <View tw={cn('')}>
        <FlatList
          horizontal
          contentContainerStyle={{
            backgroundColor: 'red',
            columnGap: 16,
          }}
          // decelerationRate={0}
          // snapToInterval={250 - 60}
          // snapToAlignment={'center'}
          snapToAlignment="center"
          // snapToOffsets={200}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onChange}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
          }}
          data={[{}, {}, {}, {}]}
          renderItem={({ item, index, ...rest }) => (
            console.log(rest), (<Food key={index}></Food>)
          )}
          pagingEnabled
          // pagingEnabled
        >
          {/* <Food></Food>
          <Food></Food>
          <Food></Food>
          <Food></Food> */}
        </FlatList>
      </View>

      <Text tw="self-stretch">HomePage {GLOBAL_VALUE}</Text>
      <Text>{GLOBAL_CONFIG.ENV}</Text>
      <Text>{portraitOrLandscape('port', 'land')}</Text>
      {/* <Writing onPress={()=>{throw new Error('SMTH FOMR HOME')}} >Error</Writing> */}
      <Go toScreen={'singIn'} children={<Text>Sign in</Text>} />

      <Go toScreen={'singUp'} children={<Text>Sign up</Text>} />

      <Go toScreen={'settings'} children={<Text>Settings</Text>} />

      <Link href="/secondx" asChild>
        <Text>Inexistent</Text>
      </Link>

      <Go toScreen={'TOS'} children={<Text>TOS</Text>} />

      <Go toScreen={'privacyPolicy'} children={<Text>P.P</Text>} />

      <Go toScreen={'drawerone'} children={<Text>Drawer</Text>} />

      <Go toScreen={'tabsone'} children={<Text>Tabs</Text>} />

      <Go toScreen={'shared-one'} children={<Text>Shared animation</Text>} />

      <Pressable onPress={signOut}>
        <Text>Sign out</Text>
      </Pressable>

      {/* {availableLanguagesList.map((v) => (
        <Pressable onPress={() => setLanguageAndSaveToStorage(v.value)}>
          <Text>change {v.label}</Text>
        </Pressable>
      ))} */}

      <Pressable onPress={() => setLanguageAndSaveToStorage(AvailableLanguages.EN)}>
        <Text>change {AvailableLanguages.EN}</Text>
      </Pressable>

      <Pressable onPress={() => setLanguageAndSaveToStorage(AvailableLanguages.RO)}>
        <Text>change {AvailableLanguages.RO}</Text>
      </Pressable>

      <Writing xl2 t={['greeting', { name: 'Lalal' }]} />

      <LocalPicture image="home" ctw="bg-slate-500 h-40" />

      {/* </TouchableRipple> */}

      {/* <Writing>{statusCode} {JSON.stringify(data, null, 2)} </Writing> */}
    </SafeFullScreenLayout>
  )
}

function FoodCategories(props) {
  return (
    <View tw={'mt-3 flex flex-row'}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          rowGap: 16,
          columnGap: 16,
          alignSelf: 'flex-start',
        }}
      >
        {props.categories.map(([icon, label], k) => (
          <View
            key={k}
            tw="flex flex-row items-center self-start rounded-lg bg-primary py-2.5 px-4"
          >
            <Icon name={icon} containerTw="w-5 h-5" />
            <Writing xs ctw="ml-1 text-white">
              {label}
            </Writing>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

function SearchPanel() {
  return (
    <View
      tw="mt-4 flex flex-row"
      style={{
        columnGap: 10,
      }}
    >
      <WritingInput
        placeholder={'Search food...'}
        inputViewTw={'bg-gray-50 h-12'}
        containerTw={'grow '}
        leftAddornment={
          <Icon
            name="search"
            containerTw="ml-2 w-[25px] h-[25px]"
            ctw="fill-gray-300 stroke-gray-300"
          />
        }
      />

      <Rhomb ctw="h-12">
        <Icon name="filters" ctw="fill-white" containerTw="w-6 h-6 pointer-events-none" />
      </Rhomb>
    </View>
  )
}

function Title() {
  return (
    <View tw="mt-4">
      <Writing xl>Find Your</Writing>
      <Writing semibold xl>
        Best food <Writing xl>here</Writing>
      </Writing>
    </View>
  )
}
function Anim({ containerTw = 'flex-start', children }) {
  let size = useSharedValue(1)
  let [targetSize, setTargetSize] = useState(1)

  useEffect(() => {
    size.value = withSpring(targetSize, {
      stiffness: 100,
    })
  }, [targetSize])

  return (
    <Pressable
      onPressIn={() => {
        setTargetSize(0.98)
      }}
      onPressOut={() => {
        setTargetSize(1)
      }}
      tw={containerTw}
    >
      <Animated.View style={{ transform: [{ scale: size }], backgroundColor: 'redx' }}>
        {children}
      </Animated.View>
    </Pressable>
  )
}

function Rhomb({ ctw, squareTw = 'bg-primary', children }) {
  return (
    <Anim>
      <View tw={cn('relative aspect-square py-1 px-1', ctw)}>
        <ViewWithShadow
          elevation={3}
          ctw={cn('inset-0 aspect-square h-full w-full rotate-45 rounded-xl', squareTw)}
        />
        <View tw="absolute inset-0 flex items-center justify-center">{children}</View>
      </View>
    </Anim>
  )
}
