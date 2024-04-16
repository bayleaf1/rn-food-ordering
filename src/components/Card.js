import { cn } from '@libs/Styling'
import ViewWithShadow from './ViewWithShadow'
import { Pressable } from 'react-native'

//TODO copy to main repo
export default function Card({ onPress, children, ctw, elevation = 1 }) {
  let Wrapper = onPress ? (p) => <Pressable {...p} onPress={onPress} /> : (p) => <>{p.children}</>
  return (
    <Wrapper>
      <ViewWithShadow ctw={cn('rounded-xl', Card.paddingTw, ctw)} elevation={elevation} onPress={onPress}>
        {children}
      </ViewWithShadow>
    </Wrapper>
  )
}

Card.paddingTw = 'p-4'
