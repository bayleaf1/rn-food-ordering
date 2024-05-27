import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import AppTextInput from '@components/FormRelated/AppTextInput'
import FormFieldsSpacer from '@components/FormRelated/FormFieldsSpacer'
import useForm from '@components/FormRelated/useForm'
import endpoints from '@constants/endpoints'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { pushSuccessToast } from '@libs/Toaster'
import { View } from 'react-native'

export default function Page() {

  const { getPropsForField, validateFormAndFetch, loading } = useForm({
    fields: {
      currentPassword: { value: '' },
      newPassword: { value: '' },
      repeatedNewPassword: { value: '' },
    },
    fetch: {
      endpoint: endpoints.updatePassword,
      onSuccess: () => {
        pushSuccessToast('Your password was successfully reset!')
        // onSuccess()
      },
    },
  })

  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')} testID="security_screen">User</AppText>
      <View tw={cn('')}>
        <AppTextInput.Password {...getPropsForField('currentPassword')}  label={'Old password'}/>
        <FormFieldsSpacer/>
        <AppTextInput.Password {...getPropsForField('newPassword')}/>
        <FormFieldsSpacer/>
        <AppTextInput.Password {...getPropsForField('repeatedNewPassword')} label={'Repeat new password'}/>
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
