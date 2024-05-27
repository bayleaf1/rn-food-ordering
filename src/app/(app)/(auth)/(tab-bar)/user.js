import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import AppTextInput from '@components/FormRelated/AppTextInput'
import FormFieldsSpacer from '@components/FormRelated/FormFieldsSpacer'
import { useAuthForm } from '@components/FormRelated/useForm'
import endpoints from '@constants/endpoints'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { useUserProvider } from '@providers/UserProvider'
import { View } from 'react-native'

export default function Page() {

  const { user, updateUserFromBackEndResponse } = useUserProvider()
  const { getPropsForField, validateFormAndFetch, loading } = useAuthForm({
    fields: {
      email: { value: user.email() },
      address: { value: user.address()},
      zipCode: { value: user.zipCode()},
      unit: { value: user.unit()},
      phone: { value: user.phone()},
    },
    fetch: {
      endpoint: endpoints.updateUserProfile,
      onSuccessToastMsg: 'Saved!',
      onSuccess: ({ data }) => {
        updateUserFromBackEndResponse(data)
      },
    },
  })

  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')} testID="user_screen">User</AppText>
      {user.isNotCompleted() && <AppText ctw={cn("")}> Profile is not completed </AppText>}
      <View tw={cn('')}>
        <AppTextInput {...getPropsForField('email')}/>
        <FormFieldsSpacer/>
        <AppTextInput.Phone {...getPropsForField('phone')}/>
        <FormFieldsSpacer/>

        <AppTextInput {...getPropsForField('address')}/>
        <FormFieldsSpacer/>

        <AppTextInput {...getPropsForField('unit')}/>
        <FormFieldsSpacer/>

        <AppTextInput {...getPropsForField('zipCode')}/>

        <FormFieldsSpacer/>
        <Button
          label={'Update'}
          labelTw={'text-white'}
          fullWidth
          onPress={() => validateFormAndFetch()}
          loading={loading}
          // onPress={() => Go.toScreen('home')}
          testID="update"
        />
      </View>
    </SafeFullScreenLayout>
  )
}
