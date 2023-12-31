import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'
import BaseLayout, { FullScreenLayout, LayoutWithTopContent } from '../layouts/BaseLayout'
import BaseStack from '../libs/Navigation/PrimaryStack'

export default function Page() {
  return (
    <FullScreenLayout>
      <View>
        <Text>HomePage</Text>
        <Link href="/second" asChild>
          <Text>SecondPage</Text>
        </Link>
      </View>
    </FullScreenLayout>
  )
}
