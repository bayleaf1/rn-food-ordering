import { Link } from 'expo-router'
import Paths from './Paths'

let defaultPath = Paths.home

function WheelMan({ to = defaultPath, children, ...rest }) {
  if (!Array.isArray(to)) to = [to]

  let [routeName, ...params] = to
  
  let route = Paths[routeName]

  let href = defaultPath
  
  if (route) href = typeof route === 'string' ? route : route(...params)
  
  return (
    <Link asChild {...rest} href={href}>
      {children}
    </Link>
  )
}

export default WheelMan
