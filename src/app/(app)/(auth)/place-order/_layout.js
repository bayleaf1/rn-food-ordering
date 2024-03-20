import { Layout } from '@layouts/BaseLayout'
import PrimaryStack from '@libs/Navigation/PrimaryStack'

export default function SelectAddressLayout() {
  return (
    <PrimaryStack
      initialRouteName="select-address"
      screenOptions={{
        headerShown: true,
        header: ({ navigation }) => (
          <Layout.Header navigation={navigation} title={'Select address'} />
        ),
      }}
    >
      <PrimaryStack.Screen name="select-address" />
    </PrimaryStack>
  )
}
