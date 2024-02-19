import Food from '@components/Food/Food'
import SearchPanel from '@components/SearchPanel'
import { LayoutForBottomTabs, SafeFullScreenLayout } from '@layouts/BaseLayout'
import { ScrollView } from 'react-native'

export default function Page() {
  let columnOneItems = Food.Showcase.propsModels(10)
  let columnTwoItems = Food.Showcase.propsModels(3)
  // <SafeFullScreenLayout headerIsShown contentTw="mt-[35px]x flex-1 bg-gray-500x">
  return (
    <LayoutForBottomTabs contentTw="flex-1">
      <SearchPanel />
      <View tw={cn('mt-6')}>
        <ScrollView style={{ flex: 0 }}>
          <View tw={cn('flex-row gap-[20px] p-1')}>
            {/* //TODO expo-linear-gradient */}
            <View tw={cn('flex grow')}>
              <Writing xl3 medium lineHeight={37} ctw={cn('mb-2 self-start')}>
                Found {'\n'}90 result
              </Writing>
              {columnOneItems.map((item, key) => (
                <Food.Showcase
                  {...item}
                  elevation={1}
                  subtitleSize={{ xs: true }}
                  titleSize={{ lg: true }}
                  subtitleTw={'mt-1'}
                  titleMtTw="-mt-3"
                  containerTw="p-1 mb-6"
                  currencySize={{ sm: true }}
                  priceSize={{ xl: true }}
                  priceContainerTw={'mt-2'}
                  valueTextSize={{ sm: true }}
                  ratingIconTw={'h-[14px] w-[14px]'}
                  key={key}
                />
              ))}
            </View>
            <View tw={cn('flex grow')}>
              {columnOneItems.map((item, key) => (
                <Food.Showcase
                  {...item}
                  elevation={1}
                  subtitleSize={{ xs: true }}
                  titleSize={{ lg: true }}
                  subtitleTw={'mt-1'}
                  titleMtTw="-mt-3"
                  containerTw="p-1 mb-6"
                  currencySize={{ sm: true }}
                  priceSize={{ xl: true }}
                  priceContainerTw={'mt-2'}
                  valueTextSize={{ sm: true }}
                  ratingIconTw={'h-[14px] w-[14px]'}
                  key={key}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </LayoutForBottomTabs>
  )
  // </SafeFullScreenLayout>
}
// <View tw={cn('mb-3 h-24 bg-gray-500')} key={key}></View>
