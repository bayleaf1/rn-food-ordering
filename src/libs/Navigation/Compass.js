import { Link } from 'expo-router'
import Routes from './Routes'

let defaultRoute = Routes.home

function Compass({ goToRoute = defaultRoute, children, ...rest }) {
  if (!Array.isArray(goToRoute)) goToRoute = [goToRoute]

  let [routeName, ...params] = goToRoute
  
  let route = Routes[routeName]

  let href = defaultRoute
  
  if (route) href = typeof route === 'string' ? route : route(...params)
  
  return (
    <Link asChild {...rest} href={href}>
      {children}
    </Link>
  )
}

export default Compass
