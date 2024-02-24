import Food from '@components/Food/Food'
import SearchPanel from '@components/SearchPanel'
import { LayoutForBottomTabs } from '@layouts/BaseLayout'
import { useAppTheme } from '@providers/AppTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native'

export default function Page() {
  let columnOneItems = Food.Showcase.propsModels(6)
  const { theme } = useAppTheme()
  return (
    <LayoutForBottomTabs contentTw="flex-1">
      <SearchPanel />
      <View tw={cn('relative mt-6')}>
        <FaddingBaner background={theme.colors.background}></FaddingBaner>
        <ScrollView style={{ flex: 0 }} showsVerticalScrollIndicator={false} bounces={false}>
          <View tw={cn('relative flex-row gap-[20px] p-1')}>
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
}

function FaddingBaner(props) {
  return (
    <LinearGradient
      colors={[props.background, 'transparent']}
      style={{
        position: 'absolute',
        top: 0,
        height: 30,
        width: '100%',
        zIndex: 1,
      }}
    />
  )
}
