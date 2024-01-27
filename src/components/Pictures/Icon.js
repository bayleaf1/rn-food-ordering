import React from 'react'
import { View } from 'react-native'
import Home from '@icons/home.svg'
import Search from '@icons/search.svg'
import Filters from '@icons/filters.svg'

const ICONS = {
  home: Home, //require('@icons/home.svg'),
  search: Search,
  filters: Filters
}

function Icon({ name = '', ctw = '', containerTw = 'w-7 h-7', iconProps = {} }) {
  let SelectedIcon = ICONS[name] || ICONS.home

  return (
    <View tw={containerTw}>
      <SelectedIcon tw={ctw} {...{ width: '100%', height: '100%', ...iconProps }} />
    </View>
  )
}

export default Icon
