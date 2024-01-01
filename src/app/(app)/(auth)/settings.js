import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { LayoutWithTopContent, SafeFullScreenLayout } from '../../../layouts/BaseLayout'
import Go from '../../../libs/Navigation/Go'

export default function Page() {
  return (
    <SafeFullScreenLayout>
      <View tw="flex-1 bg-gray-500">
        <Text>SecondPage</Text>
        <Go toRoute="home">
          <Text>HomePage</Text>
        </Go>
        {/* <Link href="/" asChild>
          <Text>HomePage</Text>
        </Link> */}
      </View>
    </SafeFullScreenLayout>
  )
}
