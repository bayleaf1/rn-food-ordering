import { Link, router } from 'expo-router'
import React, { useMemo } from 'react'
import {Screens} from './ScreenList'
import { Pressable } from 'react-native'

const defaultScreen = Screens.home

function Go({
  toScreen = defaultScreen,
  andPassProps = {},
  children,
  ctw = '',
  doNotUsePressable,
  ...rest
}) {
  let href = useMemo(() => getRoute(toScreen), [toScreen])
  // if (doNotUsePressable) {
  //   return (
  //     <Link asChild {...rest} href={href} tw={ctw}>
  //       {children}
  //     </Link>
  //   )
  // }
  let Wrapper = doNotUsePressable ? React.Fragment : Pressable
  return (
    <Link asChild {...rest} href={href} tw={ctw}>
      <Pressable>{children}</Pressable>
    </Link>
  )
}

function getRoute(toScreen) {
  if (!Array.isArray(toScreen)) toScreen = [toScreen]
  let [screenName, ...params] = toScreen
  let route = Screens[screenName]
  // console.log(`route:`, screenName, route)

  let result = defaultScreen
  if (route) result = typeof route === 'string' ? route : route(...params)
  return result
}

Go.toScreen = (name) => router.push(getRoute(name))
Go.toScreenByPath = (path) => router.push(path)
Go.getGoToScreen = (name) => () => Go.toScreen(name)

export default Go
