import Button from '@components/Button'
import Card from '@components/Card'
import FadingOverlay from '@components/FadingOverlay'
import Radio from '@components/FormRelated/Radio'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import AppText from '@components/AppText/AppText'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default function SelectCard({}) {
  const [checked, setChecked] = React.useState('first')

  return (
    <SafeFullScreenLayout contentTw="flex-1" headerIsShown>
      <Button.Outlined
        renderLabel={({ labelTw }) => (
          <View ctw={'flex flex-row items-center bg-gray-600'} style={{ flexDirection: 'row' }}>
            <Icon name="plus" ctw={'mr-2 mt-[3px] h-4 w-4 '} iconElementTw={labelTw} />
            <AppText sm ctw={cn('relative self-start', labelTw)}>
              Add New Card
            </AppText>
          </View>
        )}
        screenNameToGoOnPress={'create-card'}
        ctw={'self-center'}
      />

      <View tw={cn('relative flex-1 overflow-visible')}>
        <FadingOverlay height={30} />
        <FadingOverlay height={30} direction="bottom->top" />

        <ScrollView
          tw={cn('bg-gray-400x relative mt-2 flex-1 overflow-x-visible')}
          removeClippedSubviews={false}
          contentContainerStyle={{
            rowGap: 20,
            position: 'relative',
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2, 1, 1].map((item, key) => (
            <Card
              ctw={cn(key === 0 && 'mt-[30px]', 'realtive h-[200px] p-0')}
              key={key}
              onPress={() => setChecked(item)}
            >
              <LocalPicture name="credit-card" />
              <View tw={cn('absolute top-0 left-0 bottom-0 right-0', Card.paddingTw)}>
                <AppText xl ctw={cn('mt-[20%] text-white')}>
                  {' '}
                  1234 1234 1234 1234{' '}
                </AppText>
                <AppText lg ctw={cn('mt-[8%] text-white')}>
                  {' '}
                  Joker Joker{' '}
                </AppText>

                <Radio checked={true} color={"white"} ctw="absolute right-2 top-2" />
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>

      <Button
        label={'Next'}
        ctw="mt-10"
        fullWidth
          screenNameToGoOnPress={'show-delivery'}
        // onPress={() => console.log('07-08', 'press')}
      />
    </SafeFullScreenLayout>
  )
}
