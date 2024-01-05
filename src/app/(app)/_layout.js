import { Text } from 'react-native'
import PrimaryStack from '@libs/Navigation/PrimaryStack'


// let value = true
export default function AppLayout() {
  //TODO add slash screen provider and component here
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (false) {
    return <Text tw="mt-20">Loading...</Text>
  }
  return <PrimaryStack />
}
