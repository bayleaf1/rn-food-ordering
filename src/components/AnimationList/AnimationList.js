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
}) => {
  let size = useSharedValue(1)
  let [targetSize, setTargetSize] = useState(1)

  useEffect(() => {
    size.value = withSpring(targetSize, {
      stiffness: 100,
    })
  }, [targetSize])

  return (
    <Pressable
      onPressIn={() => {
        setTargetSize(0.98)
        onPress()
        setTimeout(() => {
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
