import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import endpoints from '@constants/endpoints'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { pushErrorToast, pushSuccessToast } from '@libs/Toaster'
import { useApiProvider } from '@providers/ApiProvider'
import { CardField, useStripe } from '@stripe/stripe-react-native'

export default function PaymentInfoPage() {
  //  return null
  const [keyToClear, setKeyToClear] = useState(0)
  const { createToken } = useStripe()
  const { post } = useApiProvider()

  const handlePayPress = async () => {
    const { token, error } = await createToken({
      type: 'Card',
    })

    if (error) {
      pushErrorToast(error.message + '. ' + 'Code: ' + error.code)
      // console.log('Payment confirmation error', JSON.stringify(error, null, 2))
    } else if (token) {
      setKeyToClear((v) => v + 1)
      post({
        endpoint: endpoints.saveCardAndCreateFBID+'x',
        body: { tokenId: token.id },
        onSuccess: () => {
          pushSuccessToast('Saved!')
          // setTimeout(() => {
          //   console.log("06-39", 'LOGG')
          //   // push(Routes.dashboard.managePlan.hrefWithRedirect)
          // }, 1000 * 0.8)
        },
      })
      // post({endpoint: endpoints.saveCardIntent, body: ''})
      //TODO add pushsuccess
      // console.log('Success from promise', JSON.stringify(token, null, 2))
    }
  }
  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')} testID="payment_info_screen">
        Payment info
      </AppText>
        <CardField
          key={keyToClear}
          postalCodeEnabled={false}
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
        />

      <Button label={'Save card'} testID={'save_card'} onPress={handlePayPress} />
    </SafeFullScreenLayout>
  )
}
