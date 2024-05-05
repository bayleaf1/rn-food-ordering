import { Pressable } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

export default function AnimationList({ children }) {
  return children
}

AnimationList.ZoomOutOnPress = ({
  containerTw = 'flex-start',
  goToScreen,
  onPress = () => '',
  children,
  targetSize = 0.98,
}) => {
  let size = useSharedValue(1)
  let [animTargetSize, setTargetSize] = useState(1)

  useEffect(() => {
    size.value = withSpring(animTargetSize, {
      stiffness: 100,
    })
  }, [animTargetSize])

  return (
    <Pressable
      onPressIn={() => {
        setTargetSize(targetSize)
        setTimeout(() => {
          onPress()
          if (goToScreen) goToScreen()
        }, 0)
      }}
      onPressOut={() => {
        setTargetSize(1)
      }}
      tw={cn(containerTw)}
    >
      <Animated.View style={{ transform: [{ scale: size }], backgroundColor: 'redx' }}>
        {children}
      </Animated.View>
    </Pressable>
  )
}
