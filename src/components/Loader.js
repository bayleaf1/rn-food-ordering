import { ActivityIndicator } from "react-native-paper"

function Loader({ size = 15, color = 'blue' }) {
  return <ActivityIndicator animating={true} size={size} color={color} />
}

export default Loader
