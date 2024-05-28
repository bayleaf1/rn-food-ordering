import { Layout } from '@layouts/BaseLayout'
import DeviceMeta from '@libs/DeviceMeta'
import PrimaryStack from '@libs/Navigation/PrimaryStack'
import { TransitionPresets } from '@react-navigation/stack'
import { Stack } from 'expo-router'

export default function SelectAddressLayout() {
  return (
    <Stack initialRouteName="payment">
      <PrimaryStack.Screen
        name="payment"
        // options={{
        //   headerShown: true,
        //   header: ({ navigation }) => (
        //     <Layout.Header
        //       topSpaceForVerticalPart={0}
        //       navigation={navigation}
        //       title={'Select address'}
        //     />
        //   ),
        // }}
      />
    

     
    </Stack>
  )
}
