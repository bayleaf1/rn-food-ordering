import React from 'react'
import { Image, View } from 'react-native'
import HomeIcon from '@icons/home.svg'
import Writing from '@components/Writing/Writing'

const ICONS = {
  home: HomeIcon//require('@icons/home.svg'),
}

const IMAGES = {
  home: require('@images/colibri.jpg'),
}

// TODO split icon component
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
