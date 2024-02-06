import React from 'react'
import { View } from 'react-native'
import Home from '@icons/home.svg'
import Search from '@icons/search.svg'
import Filters from '@icons/filters.svg'
import Burger from '@icons/burger.svg'
import Coffe from '@icons/coffe.svg'
import Snacks from '@icons/snacks.svg'

const ICONS = {
  home: Home, //require('@icons/home.svg'),
  search: Search,
  filters: Filters,
  burger: Burger,
  coffe: Coffe,
  snacks: Snacks
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
