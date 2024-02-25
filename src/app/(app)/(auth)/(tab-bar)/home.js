import HorizontalCarousel from '@components/Carousels/HorizontalCarousel'
import Food from '@components/Food/Food'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import SearchPanel from '@components/SearchPanel'
import ViewWithShadow from '@components/ViewWithShadow'
import Writing from '@components/Writing/Writing'
import { Layout } from '@layouts/BaseLayout'
import LayoutWithGaps from '@layouts/LayoutWithGaps'
import useApi from '@libs/Api'
import Go from '@libs/Navigation/Go'
import { useScreenOrientationProvider } from '@providers/ScreenOrientationProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import { ScrollView, View } from 'react-native'

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
      {/* <Go toScreen={'shared-one'} children={<Writing>Shared animation</Writing>} /> */}

      {/* <LayoutWithGaps.Gap moreContentTw={'flex-1 justify-end'}>
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
      </LayoutWithGaps.Gap> */}

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
    <View tw={cn('mt-10')}>
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
          marginTop: 30,
        }}
        renderItem={({ item }) => <Food.Showcase {...item} ratingContainerTw={"mt-4"} />}
      />
    </View>
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
