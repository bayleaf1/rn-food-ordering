import React from 'react'
import { Image, Text, View } from 'react-native'
import HomeIcon from '../../../assets/icons/home'
import Writing from '../Writing'

const ICONS = {
  home: HomeIcon,
}

const IMAGES = {
  home: require('../../../assets/images/colibri.jpg'),
}

//TODO add styles for image, prop without wrapper
function LocalPicture({ image = '', icon = '', ctw = '', pictureStyle = {} }) {
  let selectedImage = IMAGES[image]

  let SelectedIcon = ICONS[icon]

  let wraperTw = `h-full w-full ${ctw}`
  if (selectedImage) return <Image source={selectedImage} tw={wraperTw} />

  if (SelectedIcon)
    return (
      <View tw={wraperTw}>
        <SelectedIcon {...{ width: '100%', height: '100%', ...pictureStyle }} />
      </View>
    )

  return (
    <View tw={wraperTw}>
      <Writing xs>
        {image && `Image (${image}) is missing`} {icon && `Icon (${icon}) is missing`}
      </Writing>
    </View>
  )
}

export default LocalPicture
