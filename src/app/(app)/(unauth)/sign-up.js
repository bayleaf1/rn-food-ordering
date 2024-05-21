import { Pressable, Text } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { useSessionProvider } from '@providers/SessionProvider'
import useForm from '@components/FormRelated/useForm'
import AppTextInput from '@components/FormRelated/AppTextInput'
import SpacerView from '@components/SpacerView'
import { wp } from '@libs/Styling'
import Button from '@components/Button'
import Go from '@libs/Navigation/Go'
import endpoints from '@constants/endpoints'
import Clock from '@libs/Clock'

let Spacer = SpacerView.createWithStyles(wp(4))

export default function Page() {
  const { signIn } = useSessionProvider()

  const { getPropsForField, validateFormAndFetch } = useForm({
    fields: {
      email: { value: '' },
      firstName: { value: '' },
      lastName: { value: '' },
      password: { value: '' },
      timezone: {value: Clock.timezone()}

    },
    fetch: {
      endpoint: endpoints.registerWithEmailAndLogin,
      onSuccess: ({ data }) => {
        signIn(data.auth.accessToken)
      },
      onError: ({error, message, status}) => {
        console.log("04-18", error, message, status)
      },

    },
  })

  return (
    <SafeFullScreenLayout>
      <View tw={cn('')} testID="sign_up_screen">
        <AppTextInput {...getPropsForField('email')} />
        <Spacer />
        <AppTextInput {...getPropsForField('firstName')} />
        <Spacer />
        <AppTextInput {...getPropsForField('lastName')} />
        <Spacer />
        <AppTextInput.Password {...getPropsForField('password')} />
        <Spacer />
        <Button
          label={'Sign up'}
          labelTw={'text-white'}
          fullWidth
          onPress={() => validateFormAndFetch()}
          testID={'sign_up'}
        />
      </View>
    </SafeFullScreenLayout>
  )
}
