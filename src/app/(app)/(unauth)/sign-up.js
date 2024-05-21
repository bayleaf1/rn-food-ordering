import { Pressable, Text } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { useSessionProvider } from '@providers/SessionProvider'
import useForm from '@components/FormRelated/useForm'
import AppTextInput from '@components/FormRelated/AppTextInput'
import SpacerView from '@components/SpacerView'
import { wp } from '@libs/Styling'
import Button from '@components/Button'
import Go from '@libs/Navigation/Go'

let Spacer = SpacerView.createWithStyles(wp(4))

export default function Page() {
  const { signInAndRedirectToHomeScreen } = useSessionProvider()

  const { getPropsForField, validateFormAndFetch } = useForm({
    fields: {
      email: { value: '' },
      firstName: { value: '' },
      lastName: { value: '' },
      password: { value: '' },
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
          // onPress={() => validateFormAndFetch()}
          onPress={()=> {signInAndRedirectToHomeScreen('my-token'); Go.toScreen('home')}}
          testID={'sign_up'}
        />
      </View>
    </SafeFullScreenLayout>
  )
}
