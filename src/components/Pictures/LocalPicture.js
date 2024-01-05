import React from 'react'
import { Image, Text, View } from 'react-native'
import HomeIcon from '../../../assets/icons/home'
import Writing from '../Writing/Writing'

const ICONS = {
  home: HomeIcon,
}

const IMAGES = {
  home: require('../../../assets/images/colibri.jpg'),
}

function LocalPicture({
  image = '',
  icon = '',
  ctw = '',
  imageResizeMode = 'cover',
  iconProps = {},
}) {
  let selectedImage = IMAGES[image]

  let SelectedIcon = ICONS[icon]

  if (selectedImage)
    return (
      <View tw={ctw}>
        <Image source={selectedImage} tw={'h-full w-full'} resizeMode={imageResizeMode} />
      </View>
    )

  if (SelectedIcon)
    return (
      <View tw={ctw}>
        <SelectedIcon {...{ width: '100%', height: '100%', ...iconProps }} />
      </View>
    )

  return (
    <View tw={ctw}>
      <Writing xs>
        {image && `Image (${image}) is missing`} {icon && `Icon (${icon}) is missing`}
      </Writing>
    </View>
  )
}

export default LocalPicture
