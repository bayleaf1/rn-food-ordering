import React from 'react'
import { Image, Text, View } from 'react-native'
import HomeIcon from '../../../assets/icons/home'

const ICONS = {
  home: HomeIcon,
}

const IMAGES = {
  home: require('../../../assets/images/colibri.jpg'),
}

//TODO add styles for image, prop without wrapper
function LocalPicture({ image = '', icon = '', ctw = '' }) {
  let selectedImage = IMAGES[image]

  let SelectedIcon = ICONS[icon]

  if (selectedImage) return <Image source={selectedImage} tw={`h-full w-full ${ctw}`} />

  if (SelectedIcon)
    return (
      <View tw={`h-full w-full ${ctw}`}>
        <SelectedIcon width={'100%'} height="100%" />
      </View>
    )

  return (
    <View>
      <Text>
        {image && `Image (${image}) is missing`} {icon && `Icon (${icon}) is missing`}
      </Text>
    </View>
  )
}

export default LocalPicture
