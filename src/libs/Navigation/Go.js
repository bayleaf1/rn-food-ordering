import { Link } from 'expo-router'
import Routes from './Routes'
import { useMemo } from 'react'

const defaultRoute = Routes.home

function Go({ toRoute = defaultRoute, children, ...rest }) {
  let href = useMemo(() => {
    if (!Array.isArray(toRoute)) toRoute = [toRoute]

    let [routeName, ...params] = toRoute

    let route = Routes[routeName]

    let result = defaultRoute

    if (route) result = typeof route === 'string' ? route : route(...params)
    return result
  }, [toRoute])

  return <Link asChild {...rest} href={href} children={children} />
}

export default Go
