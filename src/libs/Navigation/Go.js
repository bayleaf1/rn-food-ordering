import { Link } from 'expo-router'
import { useMemo } from 'react'
import Screens from './ScreenList'
import { Pressable } from 'react-native'

const defaultScreen = Screens.home

function Go({ toScreen = defaultScreen, children, ...rest }) {
  let href = useMemo(() => {
    if (!Array.isArray(toScreen)) toScreen = [toScreen]

    let [screenName, ...params] = toScreen

    let route = Screens[screenName]

    let result = defaultScreen

    if (route) result = typeof route === 'string' ? route : route(...params)
    return result
  }, [toScreen])

  return (
    <Link asChild {...rest} href={href}>
      <Pressable>{children}</Pressable>
    </Link>
  )
}
export default Go
