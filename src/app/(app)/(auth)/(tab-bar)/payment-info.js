import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import AppConfig from '@constants/AppConfig'
import endpoints from '@constants/endpoints'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { pushErrorToast, pushSuccessToast } from '@libs/Toaster'
import { useApiProvider } from '@providers/ApiProvider'
import { CardField, useStripe } from '@stripe/stripe-react-native'

export default function PaymentInfoPage() {
  const [keyToClear, setKeyToClear] = useState(0)
  const [isComplete, setIsComplete] = useState(AppConfig.testEnvOrOther(true, false))
  const [loading, setLoading] = useState(false)

  const { createToken } = useStripe()
  const { post } = useApiProvider()

  const handleSaveCardPress = async () => {
    const { token, error } = await createToken({
      type: 'Card',
    })

    if (error) {
      pushErrorToast(error.message + '. ' + 'Code: ' + error.code)
      // console.log('Payment confirmation error', JSON.stringify(error, null, 2))
    } else if (token) {
      post({
        setLoading,
        endpoint: endpoints.saveCardAndCreateFBID,
        body: { tokenId: token.id },
        onSuccess: () => {
          setIsComplete(false)
          setKeyToClear((v) => v + 1)
          pushSuccessToast('Saved!')
          // setTimeout(() => {
          //   console.log("06-39", 'LOGG')
          //   // push(Routes.dashboard.managePlan.hrefWithRedirect)
          // }, 1000 * 0.8)
        },
      })
    }
  }

  const handlePayPressInTestEnv = () => {
    setLoading(true)
    post({
      setLoading,
      endpoint: endpoints.saveCardAndCreateFBID,
      body: { tokenId: 'tok_visa' },
      onSuccess: () => {
        setIsComplete(false)
        setKeyToClear((v) => v + 1)
        pushSuccessToast('Saved!')
      },
    })
  }

  const onSaveCardPress = AppConfig.testEnvOrOther(handlePayPressInTestEnv, handleSaveCardPress)

  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')} testID="payment_info_screen">
        Payment info
      </AppText>
      <CardField
        key={keyToClear}
        postalCodeEnabled={true}
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
        onCardChange={(card) => {
          setIsComplete(card.complete)
        }}
      />

      <Button
        label={'Save card'}
        testID={'save_card'}
        loading={loading}
        enabled={isComplete}
        onPress={onSaveCardPress}
        fullWidth
      />
    </SafeFullScreenLayout>
  )
}
