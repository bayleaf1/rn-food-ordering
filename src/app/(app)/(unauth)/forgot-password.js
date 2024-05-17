import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import AppTextInput from '@components/FormRelated/AppTextInput'
import useForm from '@components/FormRelated/useForm'
import SpacerView from '@components/SpacerView'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { wp } from '@libs/Styling'

let Spacer = SpacerView.createWithStyles(wp(4))

export default function Page() {
  const { getPropsForField, validateFormAndFetch } = useForm({
    fields: {
      email: { value: '' },
    },
  })

  return (
    <SafeFullScreenLayout>
      <View testID="forgot_password_screen">

      <AppText ctw={cn('text-center')} size="xl">
        Forgot password
      </AppText>
      </View>

      <View tw={cn('')}>
        <AppTextInput {...getPropsForField('email')} />
        <Spacer />
        <Button
          label={'Reset'}
          labelTw={'text-white'}
          fullWidth
          onPress={() => validateFormAndFetch()}
        />
      </View>
    </SafeFullScreenLayout>
  )
}
