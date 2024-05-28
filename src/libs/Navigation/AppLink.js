import { Link, router } from 'expo-router'
import { Pressable } from 'react-native'
import { Screens } from './ScreenList'
import { cn } from '@libs/Styling'

function AppLink({ href = '', screenName = '', ctw, children }) {
  return (
    <Link asChild  href={href || Screens[screenName]()} tw={cn(ctw)}>
      <Pressable>{children}</Pressable>
    </Link>
  )
}

AppLink.navigateToHref = (href) => router.push(href)
AppLink.replaceHref = (href) => router.replace(href)

export default AppLink
