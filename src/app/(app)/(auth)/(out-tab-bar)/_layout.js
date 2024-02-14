import { Layout } from '@layouts/BaseLayout'
import PrimaryStack from '@libs/Navigation/PrimaryStack'

export default function OutTabLayout() {
  return (
    <PrimaryStack
      initialRouteName="foog-review"
      screenOptions={{
        headerShown: true,
        header: ({ navigation }) => (
          <Layout.Header
            navigation={navigation}
            renderRightElement={() => <Layout.Header.AddToFavorites />}
          />
        ),
      }}
    >
      <PrimaryStack.Screen name="food-review" />
    </PrimaryStack>
  )
}
{
  /* <PrimaryStack.Screen name="settings" /> */
}
