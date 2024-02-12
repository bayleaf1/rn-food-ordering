import { Pressable } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

export default function AnimationList({ children }) {
  return children
}

AnimationList.ZoomOutOnClick = ({ containerTw = 'flex-start', onPress = () => '', children }) => {
  let size = useSharedValue(1)
  let [targetSize, setTargetSize] = useState(1)

  useEffect(() => {
    size.value = withSpring(targetSize, {
      stiffness: 100,
    })
  }, [targetSize])

  return (
      <Pressable
        onPress={onPress}
        onPressIn={() => {
          setTargetSize(0.98)
        }}
        onPressOut={() => {
          setTargetSize(1)
        }}
        tw={containerTw}
      >
        <Animated.View style={{ transform: [{ scale: size }], backgroundColor: 'redx' }}>
          {children}
        </Animated.View>
      </Pressable>
  )
}
