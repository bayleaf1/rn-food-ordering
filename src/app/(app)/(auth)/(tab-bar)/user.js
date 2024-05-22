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
import { Pressable, ScrollView, View } from 'react-native'

export default function Page() {
  // let { signOut } = useSessionProvider()
  // let { setLanguageAndSaveToStorage, AvailableLanguages } = useTranslationProvider()
  // let { portraitOrLandscape } = useScreenOrientationProvider()

  // let { data, statusCode } = useApi('/todos/1', { defaultData: {} })

  const { user } = useSessionProvider()
  const { getPropsForField, validateFormAndFetch } = useAuthForm({
    fields: {
      email: { value: UserManager.get(user, 'email') },
      address: { value: UserManager.get(user, 'address')},
      zipCode: { value: UserManager.get(user, 'zipCode')},
      unit: { value: UserManager.get(user, 'unit')},
      phone: { value: UserManager.get(user, 'phone')},

      // password: { value: '' },
      // timezone: {value: Clock.timezone()}
    },
    fetch: {
      endpoint: endpoints.loginWithEmail,
      onSuccess: ({ data }) => {
        signIn(data.auth.accessToken)
      },
      onError: ({ error }) => {
        console.log(`errorx:`, error)
      },
    },
  })

  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')} testID="user_screen">User</AppText>
      {UserManager.isNotCompleted(user) && <AppText ctw={cn("")}> Profile is not completed </AppText>}
      <View tw={cn('')}>
        <AppTextInput {...getPropsForField('email')}/>
        <FormFieldsSpacer/>
        <AppTextInput {...getPropsForField('phone')}/>
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
