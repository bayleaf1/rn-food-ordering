import React from 'react'
import { Image, View } from 'react-native'
import AppText from '@components/AppText/AppText'

const IMAGES = {
  home: require('@images/colibri.jpg'),
  'egg-pasta': require('@images/egg-pasta-250.png'),
  'credit-card': require('@images/credit-card.png'),
}

function LocalPicture({ image = '', name = '', ctw = '', imageResizeMode = 'cover', style = {} }) {
  let selectedImage = IMAGES[image || name]

  // let SelectedIcon = ICONS[icon]

  if (selectedImage)
    return (
      <View tw={ctw} style={style}>
        <Image source={selectedImage} tw={'h-full w-full'} resizeMode={imageResizeMode} />
      </View>
    )

  // if (SelectedIcon)
  //   return (
  //     <View tw={ctw}>
  //       <SelectedIcon {...{ width: '100%', height: '100%', ...iconProps }} />
  //     </View>
  //   )

  return (
    <View tw={ctw}>
      <AppText xs>{image && `Image (${image}) is missing`}</AppText>
    </View>
  )
}

export default LocalPicture
