import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { LayoutWithTopContent, SafeFullScreenLayout } from '../../../layouts/BaseLayout'
import Go from '../../../libs/Navigation/Go'

export default function Page() {
  return (
    <SafeFullScreenLayout contentTw='bg-green-400'>
        <Text>Settings</Text>
        <Go toScreen="home">
          <Text>HomePage</Text>
        </Go>
    </SafeFullScreenLayout>
  )
}
