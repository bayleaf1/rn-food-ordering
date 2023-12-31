import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'
import { FullScreenLayout } from '../layouts/BaseLayout'

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
