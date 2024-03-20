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
import ChevronLeft from '@icons/chevron-left.svg'
import HeartGrey from '@icons/heart-grey.svg'
import HeartOutlined from '@icons/heart-outlined.svg'
import ClockRed from '@icons/clock-red.svg'
import Close from '@icons/close.svg'
import Plus from '@icons/plus.svg'

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
  'chevron-left': ChevronLeft,
  'clock-red': ClockRed,
  'heart-grey': HeartGrey,
  'heart-outlined': HeartOutlined,
  close: Close,
  plus: Plus
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
