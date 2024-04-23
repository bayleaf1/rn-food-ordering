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
import { hp, hpWithMax, wp } from '@libs/Styling'
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
      <LayoutWithGaps.TopSection
        moreContentTw={'flex justify-between'}
        moreContentStyles={{
          height: wp('55%'),
        }}
      >
        <Title />
        <SearchPanel />
        <FoodCategories categories={categories} />
        <SeeAll />
      </LayoutWithGaps.TopSection>
      {/* </View> */}

      <View tw={cn('flex-1 bg-gray-600')} style={{ heightx: hp(20), overflow: 'hidden' }}>
        <Writing ctw={cn('')}> dsfsdfsdf </Writing>
      </View>
      {/* <FoodListAsCarousel foods={foods} /> */}
      {/* </View> */}
    </LayoutWithGaps>
  )
}

function SeeAll() {
  return (
    <Writing
      medium
      ctw={cn('text-right text-primary')}
      style={{
        marginRight: Layout.HORIZONTAL_SPACE,
      }}
    >
      See all
    </Writing>
  )
}
function FoodListAsCarousel() {
  return (
    <View tw={cn('')}>
      {/* <Writing
        medium
        ctw={cn('text-right text-primary')}
        style={{
          marginRight: Layout.HORIZONTAL_SPACE,
        }}
      >
        See all
      </Writing> */}
      <View style={{}}>
        {/* //TODO add link */}
        {/* <Writing
        medium
        ctw={cn('text-right text-primary')}
        style={{
          marginRight: Layout.HORIZONTAL_SPACE,
        }}
      >
        See all
      </Writing> */}
        <HorizontalCarousel
          items={foods}
          NORMALIZED_ITEM_WIDTH={0.63}
          HORIZONTAL_SPACE={Layout.HORIZONTAL_SPACE}
          // contentContainerStyle={{
          //   paddingBottom: 15,
          //   paddingTop: 5,
          //   marginTop: 30,
          // }}
          renderItem={({ item }) => <Food.Showcase {...item} ratingContainerTw={'mt-4'} />}
        />
      </View>
    </View>
  )
}

function FoodCategories(props) {
  let activeIndex = 0
  return (
    <View tw={'mt-6x flex flex-row'} style={{ marginTopx: hp(1) }}>
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
    <View style={{ marginTopx: hp(1) }}>
      <Writing xl>Find Your</Writing>
      <Writing semibold xl>
        Best food <Writing xl>here</Writing>
      </Writing>
    </View>
  )
}
