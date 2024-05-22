import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import AppTextInput from '@components/FormRelated/AppTextInput'
import FormFieldsSpacer from '@components/FormRelated/FormFieldsSpacer'
import useForm from '@components/FormRelated/useForm'
import SpacerView from '@components/SpacerView'
import AppConfig from '@constants/AppConfig'
import endpoints from '@constants/endpoints'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Clock from '@libs/Clock'
import Go from '@libs/Navigation/Go'
import { wp } from '@libs/Styling'
import { useSessionProvider } from '@providers/SessionProvider'


export default function LoginPage() {
  const { signIn } = useSessionProvider()
  const { getPropsForField, validateFormAndFetch } = useForm({
    fields: {
      email: { value: '' },
      password: { value: '' },
      timezone: {value: Clock.timezone()}
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
      <AppText ctw={cn('text-center')} size="xl">
        Fishbox - {AppConfig.TEST}
      </AppText>

      <View tw={cn('')}>
        <AppTextInput {...getPropsForField('email')}/>
        <FormFieldsSpacer/>
        <AppTextInput.Password {...getPropsForField('password')} />
        <FormFieldsSpacer/>
        <Button
          label={'Login'}
          labelTw={'text-white'}
          fullWidth
          onPress={() => validateFormAndFetch()}
          // onPress={() => Go.toScreen('home')}
          testID="login"
        />
      </View>
      <View testID="login_screen" ><AppText>Lalalal</AppText></View>

      <Go toScreen="forgot-password">
        <AppText ctw={cn('')} testID='forgot_password_button'> Forgot password? </AppText>
      </Go>
      <Go toScreen="sign-up">
        <AppText ctw={cn('')} testID='sign_up_button'> Register </AppText>
      </Go>
    </SafeFullScreenLayout>
  )
}
