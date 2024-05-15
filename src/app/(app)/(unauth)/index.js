import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import AppTextInput from '@components/FormRelated/AppTextInput'
import useForm from '@components/FormRelated/useForm'
import SpacerView from '@components/SpacerView'
import AppConfig from '@constants/AppConfig'
import endpoints from '@constants/endpoints'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Go from '@libs/Navigation/Go'
import { wp } from '@libs/Styling'

let Spacer = SpacerView.createWithStyles(wp(4))

export default function LoginPage() {
  const { getPropsForField, validateFormAndFetch } = useForm({
    fields: {
      email: { value: '' },
      password: { value: '' },
    },
    fetch: {
      endpoint: endpoints.loginWithEmail,
      onSuccess: ({ data }) => {
        console.log('23-17', data)
      },
      onError: ({ error }) => {
        console.log(`errorx:`, error)
      },
      method: 'get',
    },
  })

  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('text-center')} size="xl">
        Fishbox - {AppConfig.TEST}
      </AppText>

      <View tw={cn('')}>
        <AppTextInput {...getPropsForField('email')} />
        <Spacer />
        <AppTextInput.Password {...getPropsForField('password')} />
        <Spacer />
        <Button
          label={'Login'}
          labelTw={'text-white'}
          fullWidth
          onPress={() => validateFormAndFetch()}
        />
      </View>
      <View testID="welcome" ><AppText>Lalalal</AppText></View>

      <Go toScreen="forgot-password">
        <AppText ctw={cn('')}> Forgot password? </AppText>
      </Go>
      <Go toScreen="sign-up">
        <AppText ctw={cn('')} testID='register'> Register </AppText>
      </Go>
    </SafeFullScreenLayout>
  )
}
