import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { LayoutWithTopContent } from '../../../layouts/BaseLayout'

export default function Page() {
  // <LayoutWithTopContent bgColor={'gray'}>
  return (
    <View tw="flex-1 bg-gray-500">
      <Text>SecondPage</Text>
      <Link href="/" asChild>
        <Text>HomePage</Text>
      </Link>
    </View>
  )
  // </LayoutWithTopContent>
}
