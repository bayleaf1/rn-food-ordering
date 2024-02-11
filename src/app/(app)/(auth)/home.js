import WritingInput from '@components/FormRelated/WritingInput'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import ViewWithShadow from '@components/ViewWithShadow'
import Writing from '@components/Writing/Writing'
import { Layout } from '@layouts/BaseLayout'
import useApi from '@libs/Api'
import { useScreenOrientationProvider } from '@providers/ScreenOrientationProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import { Pressable, ScrollView, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import HorizontalCarousel from '@components/Carousels/HorizontalCarousel'
import LayoutWithGaps from '@layouts/LayoutWithGaps'
import { TouchableRipple } from 'react-native-paper'
{
  /* <Writing onPress={()=>{throw new Error('SMTH FOMR HOME')}} >Error</Writing> */
}

const categories = [
  ['burger', 'Fast food'],
  ['coffe', 'Drink'],
  ['snacks', 'Snacks'],
]

let foods = [
  {
    name: 'Egg pasta',
    imageName: 'egg-pasta',
    secondName: 'Spicy Chicken Pasta',
    grade: 5,
    price: 15,
  },
  {
    name: 'Egg pasta',
    imageName: 'egg-pasta',
    secondName: 'Spicy Chicken Pasta',
    grade: 4,
    price: 10,
  },
  {
    name: 'Egg pasta',
    imageName: 'egg-pasta',
    secondName: 'Spicy Chicken Pasta',
    grade: 5,
    price: 17,
  },
]

export default function Page() {
  let { signOut } = useSessionProvider()
  let { setLanguageAndSaveToStorage, AvailableLanguages } = useTranslationProvider()
  let { portraitOrLandscape } = useScreenOrientationProvider()

  let { data, statusCode } = useApi('/todos/1', { defaultData: {} })

  return (
    <LayoutWithGaps>
      <LayoutWithGaps.TopSection>
        <Title />
        <SearchPanel />
        <FoodCategories categories={categories} />
      </LayoutWithGaps.TopSection>

      <LayoutWithGaps.Gap>
        <FoodListAsCarousel foods={foods} />
      </LayoutWithGaps.Gap>

      <LayoutWithGaps.Gap moreContentTw={'flex-1 justify-end'}>
        <ViewWithShadow elevation={5} ctw="flex-0 h-[72px] justify-center rounded-t-[60px]">
          <View tw={cn('flex-0 mx-10 h-full flex-row justify-around')}>
            <Ripple ctw="h-full flex-1 grow items-center justify-center rounded-full">
              <Icon
                name="home"
                ctw={'h-8 w-10'}
                iconElementTw={cn(true ? 'fill-primary stroke-primary' : 'fill-black stroke-black')}
              />
            </Ripple>
            <Ripple ctw="h-full flex-1 grow items-center justify-center rounded-full">
              <Icon
                name="search"
                ctw={'h-8 w-10'}
                iconElementTw={cn(true ? 'fill-primary stroke-primary' : 'fill-black stroke-black')}
              />
            </Ripple>
            <Ripple ctw="h-full flex-1 grow items-center justify-center rounded-full">
              <Icon
                name="cart"
                ctw={'h-8 w-10'}
                iconElementTw={cn(true ? 'fill-primary stroke-primary' : 'fill-black stroke-black')}
              />
            </Ripple>

            <Ripple ctw="h-full flex-1 grow items-center justify-center rounded-full">
              <Icon
                name="orders"
                ctw={'h-8 w-10'}
                iconElementTw={cn(true ? 'fill-primary stroke-primary' : 'fill-black stroke-black')}
              />
            </Ripple>
          </View>
        </ViewWithShadow>
      </LayoutWithGaps.Gap>

      {/* <Writing ctw={cn('')}>Bttom </Writing> */}

      {/* </View> */}
      {/* <View tw={cn('h-10 w-10 bg-gray-600')}></View> */}
      {/* <HorizontalCarousel
          items={[1, 2, 3]}
          NORMALIZED_ITEM_WIDTH={0.6}
          HORIZONTAL_SPACE={Layout.HORIZONTAL_SPACE}
          renderItem={({ item, index }) => (
            <View tw={cn('h-[400px] bg-gray-300')} style={{}}>
              <Writing ctw={cn('')}> {index + 1} </Writing>
            </View>
          )}
        /> */}

      {/* <Text tw="self-stretch">HomePage {GLOBAL_VALUE}</Text>
        <Text>{GLOBAL_CONFIG.ENV}</Text>
        <Text>{portraitOrLandscape('port', 'land')}</Text>
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
        </Pressable> */}

      {/* {availableLanguagesList.map((v) => (
        <Pressable onPress={() => setLanguageAndSaveToStorage(v.value)}>
          <Text>change {v.label}</Text>
        </Pressable>
      ))} */}

      {/* <Pressable onPress={() => setLanguageAndSaveToStorage(AvailableLanguages.EN)}>
          <Text>change {AvailableLanguages.EN}</Text>
        </Pressable>

        <Pressable onPress={() => setLanguageAndSaveToStorage(AvailableLanguages.RO)}>
          <Text>change {AvailableLanguages.RO}</Text>
        </Pressable>

        <Writing xl2 t={['greeting', { name: 'Lalal' }]} />

        <LocalPicture image="home" ctw="bg-slate-500 h-40" /> */}

      {/* </TouchableRipple> */}

      {/* <Writing>{statusCode} {JSON.stringify(data, null, 2)} </Writing> */}
    </LayoutWithGaps>
  )
}

function FoodListAsCarousel() {
  return (
    <View tw={cn('mt-8')}>
      {/* //TODO add link */}
      <Writing
        medium
        ctw={cn('text-right text-primary')}
        style={{
          marginRight: Layout.HORIZONTAL_SPACE,
        }}
      >
        See all
      </Writing>
      <HorizontalCarousel
        items={foods}
        NORMALIZED_ITEM_WIDTH={0.63}
        HORIZONTAL_SPACE={Layout.HORIZONTAL_SPACE}
        contentContainerStyle={{
          paddingBottom: 15,
          paddingTop: 5,
          marginTop: 16,
        }}
        renderItem={({ item }) => <Food {...item} />}
      />
    </View>
  )
}

function Food({ name, imageName, secondName, grade, price }) {
  return (
    <ViewWithShadow elevation={2} ctw="w-full items-center self-start  rounded-3xl p-4  pt-0">
      <LocalPicture name={imageName} ctw="h-[200px] self-stretch" imageResizeMode="contain" />
      <Writing xl ctw={cn('mt-4')}>
        {name}
      </Writing>
      <Writing sm ctw={cn('mt-3 text-gray-400')}>
        {secondName}
      </Writing>

      <View tw={cn('mt-3 flex flex-row items-center justify-center')}>
        <Icon name="rating-star" ctw="h-[18px] w-[18px]" />
        <Writing sm ctw={cn('ml-1 text-gray-400')}>
          {grade}.0
        </Writing>
      </View>

      <Writing ctw={cn('mt-3 text-primary')}>
        $ <Writing xl2>{price}</Writing>
      </Writing>
    </ViewWithShadow>
  )
}

function FoodCategories(props) {
  let activeIndex = 0
  return (
    <View tw={'mt-6 flex flex-row'}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          rowGap: 16,
          columnGap: 16,
          alignSelf: 'flex-start',
        }}
      >
        {props.categories.map(([icon, label], k) => {
          let isActive = k === activeIndex
          return (
            <View
              key={k}
              tw={cn(
                'flex flex-row items-center self-start rounded-lg bg-purple-200 py-2.5 px-4',
                isActive && 'bg-primary'
              )}
            >
              <Icon
                name={icon}
                containerTw="w-5 h-5"
                iconElementTw={cn(
                  'fill-gray-500 stroke-gray-500',
                  isActive && 'fill-white stroke-white'
                )}
              />
              <Writing xs ctw={cn('ml-2 text-gray-500', isActive && 'text-white')}>
                {label}
              </Writing>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

function SearchPanel() {
  return (
    <View
      tw="mt-4 flex flex-row"
      style={{
        columnGap: 20,
      }}
    >
      <WritingInput
        placeholder={'Search food...'}
        inputViewTw={'bg-gray-50 h-14'}
        containerTw={'grow'}
        leftAddornment={
          <Icon
            name="search"
            ctw="ml-2 h-[25px] w-[25px]"
            iconElementTw="fill-gray-300 stroke-gray-300"
          />
        }
      />

      <Rhomb ctw="h-[54px]">
        <Icon name="filters" iconElementTw="pointer-events-none fill-white" />
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
