import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import AppTextInput from '@components/FormRelated/AppTextInput'
import FormFieldsSpacer from '@components/FormRelated/FormFieldsSpacer'
import useForm from '@components/FormRelated/useForm'
import AppConfig from '@constants/AppConfig'
import endpoints from '@constants/endpoints'
import Authentification from '@dto/Authentification'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Clock from '@libs/Clock'
import AppLink from '@libs/Navigation/AppLink'
import { useSessionProvider } from '@providers/SessionProvider'

export default function LoginPage() {
  const { signIn } = useSessionProvider()
  const { getPropsForField, validateFormAndFetch, loading } = useForm({
    fields: {
      email: { value: '' },
      password: { value: '' },
      timezone: { value: Clock.timezone() },
    },
    fetch: {
      endpoint: endpoints.loginWithEmail,
      onSuccess: ({ data }) => {
        signIn(new Authentification(data))
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
        <AppTextInput {...getPropsForField('email')} />
        <FormFieldsSpacer />
        <AppTextInput.Password {...getPropsForField('password')} />
        <FormFieldsSpacer />
        <Button
          label={'Login'}
          labelTw={'text-white'}
          fullWidth
          onPress={() => validateFormAndFetch()}
          loading={loading}
          testID="login"
        />
      </View>
      <View testID="login_screen">
        <AppText>Lalalal</AppText>
      </View>

      <AppLink screenName="forgot-password">
        <AppText ctw={cn('')} testID="forgot_password_button">
          Forgot password?
        </AppText>
      </AppLink>
      <AppLink screenName="sign-up">
        <AppText ctw={cn('')} testID="sign_up_button">
          Register
        </AppText>
      </AppLink>
    </SafeFullScreenLayout>
  )
}
