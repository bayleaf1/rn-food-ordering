import AnimationList from '@components/AnimationList/AnimationList'
import Button from '@components/Button'
import Card from '@components/Card'
import FadingOverlay from '@components/FadingOverlay'
import Food from '@components/Food/Food'
import Radio from '@components/FormRelated/Radio'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import Rhomb from '@components/Rhomb'
import Ripple from '@components/Ripple'
import SpacerView from '@components/SpacerView'
import ViewWithShadow from '@components/ViewWithShadow'
import Writing from '@components/Writing/Writing'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import React from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

import { Modal, Text, StyleSheet } from 'react-native'
import Go from '@libs/Navigation/Go'
import { Link } from 'expo-router'

export default function SelectAddress({}) {
  const [checked, setChecked] = React.useState('first')

  return (
    <SafeFullScreenLayout  contentTw="flex-1" headerIsShown>
      <Button.Outlined
        renderLabel={({ labelTw }) => (
          <View ctw={'flex flex-row items-center bg-gray-600'} style={{ flexDirection: 'row' }}>
            <Icon name="plus" ctw={'mr-2 mt-[3px] h-4 w-4 '} iconElementTw={labelTw} />
            <Writing sm ctw={cn('relative self-start', labelTw)}>
              Add New Address
            </Writing>
          </View>
        )}
        screenNameToGoOnPress={'create-address'}
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
          {[1, 2, 1, 1, 1, 1, 1, 1, 1, 1].map((item, key) => (
            <Card ctw={cn(key === 0 && 'mt-[30px]')} key={key} onPress={() => setChecked(item)}>
              <View tw={cn('flex flex-row justify-between')}>
                <Writing semibold ctw={cn('')}>
                  My home address
                </Writing>
                <View tw={cn('rounded-fullx bg-gray-200x')}>
                  <Radio checked={item === checked} onPress={() => setChecked(item)} />
                </View>
              </View>
              <Writing sm ctw={cn('text-gray-400')}>
                Home
              </Writing>
              <Writing sm ctw={cn('mt-3 text-gray-400')} numberOfLines={2} additionalLineHeight={2}>
                (503) 338-5200 15612 Fisher Island Dr Miami Beach, Florida(FL), 33109
              </Writing>
            </Card>
          ))}
        </ScrollView>
      </View>

      <Button
        label={'Done'}
        ctw="mt-10"
        fullWidth

        // onPress={() => console.log('07-08', 'press')}
      />
    </SafeFullScreenLayout>
  )
}
