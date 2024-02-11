import React from 'react'
import { View } from 'react-native'
import Home from '@icons/home.svg'
import Search from '@icons/search.svg'
import Filters from '@icons/filters.svg'
import Burger from '@icons/burger.svg'
import Coffe from '@icons/coffe.svg'
import Snacks from '@icons/snacks.svg'
import RatingStar from '@icons/rating-star.svg'
import Cart from '@icons/cart.svg'
import Orders from '@icons/orders.svg'

const ICONS = {
  home: Home, //require('@icons/home.svg'),
  search: Search,
  filters: Filters,
  burger: Burger,
  coffe: Coffe,
  snacks: Snacks,
  'rating-star': RatingStar,
  cart: Cart,
  orders: Orders,
}

function Icon({ name = 'home', ctw, iconElementTw = '', iconProps = {} }) {
  let SelectedIcon = ICONS[name] || ICONS.home

  return (
    <View tw={cn('w-6 h-6', ctw)}>
      <SelectedIcon tw={cn(iconElementTw)} {...{ width: '100%', height: '100%', ...iconProps }} />
    </View>
  )
}

export default Icon
