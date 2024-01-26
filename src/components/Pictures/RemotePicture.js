import React from 'react'
import { Image } from 'react-native'

function RemotePicture({ src, ctw = '' }) {
  return <Image source={{ uri: src }} tw={`h-full w-full ${ctw}`} />
}

export default RemotePicture
