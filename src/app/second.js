import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import BaseLayout from '../layouts/BaseLayout'

export default function Page() {
  return (
    <BaseLayout>
      <Text>SecondPage</Text>
      <Link href="/" asChild>
        <Text>HomePage</Text>
      </Link>
    </BaseLayout>
  )
}
