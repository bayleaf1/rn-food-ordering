import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import AppTextInput from '@components/FormRelated/AppTextInput'
import FormFieldsSpacer from '@components/FormRelated/FormFieldsSpacer'
import useForm, { useAuthForm } from '@components/FormRelated/useForm'
import endpoints from '@constants/endpoints'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import useApi from '@libs/Api'
import { wp } from '@libs/Styling'
import { UserManager } from '@libs/UserManager'
import { useScreenOrientationProvider } from '@providers/ScreenOrientationProvider'
import { useSessionProvider } from '@providers/SessionProvider'
import { useTranslationProvider } from '@providers/TranslationProvider'
import { useUserProvider } from '@providers/UserProvider'
import { Pressable, ScrollView, View } from 'react-native'

export default function Page() {
  // let { signOut } = useSessionProvider()
  // let { setLanguageAndSaveToStorage, AvailableLanguages } = useTranslationProvider()
  // let { portraitOrLandscape } = useScreenOrientationProvider()

  // let { data, statusCode } = useApi('/todos/1', { defaultData: {} })

  const { user, updateUserFromBackEndResponse } = useUserProvider()
  const { getPropsForField, validateFormAndFetch } = useAuthForm({
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
      method: 'post'
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
          // onPress={() => Go.toScreen('home')}
          testID="update"
        />
      </View>
    </SafeFullScreenLayout>
  )
}
