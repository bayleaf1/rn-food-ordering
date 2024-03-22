import { Layout } from '@layouts/BaseLayout'
import DeviceMeta from '@libs/DeviceMeta'
import PrimaryStack from '@libs/Navigation/PrimaryStack'
import { TransitionPresets } from '@react-navigation/stack'

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
      <PrimaryStack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          gestEnabled: true,
          ...DeviceMeta.iosOrOther(
            TransitionPresets.ModalPresentationIOS,
            TransitionPresets.ModalTransition
          ),
        }}
      />
    </PrimaryStack>
  )
}
