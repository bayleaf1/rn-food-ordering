import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import AppTextInput from '@components/FormRelated/AppTextInput'
import useForm from '@components/FormRelated/useForm'
import Loader from '@components/Loader'
import StripeCardField from '@components/Stripe/StripeCardField'
import AppConfig from '@constants/AppConfig'
import endpoints from '@constants/endpoints'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Consoler from '@libs/Consoler'
import AppLink from '@libs/Navigation/AppLink'
import { Screens } from '@libs/Navigation/ScreenList'
import { pushErrorToast, pushSuccessToast } from '@libs/Toaster'
import { useApiProvider } from '@providers/ApiProvider'
import { useUserProvider } from '@providers/UserProvider'
import { initPaymentSheet, presentPaymentSheet } from '@stripe/stripe-react-native'
import { useLocalSearchParams } from 'expo-router'
import { View } from 'react-native'

export default function Payment({}) {
  const local = useLocalSearchParams()
  const planId = Number(local.id)
  const [formButtonLoading, setFormButtonLoading] = useState(false)
  const [paymentData, setPaymentData] = useState()
  const { refetchUser } = useUserProvider()
  const { validateFormAndFetch, getPropsForField, getValueForField } = useForm({
    fields: {
      promocode: { value: '' },
    },
  })
  const [elements, setElements] = useState('0100')
  const needShowing = (idx) => !!Number(elements.slice(idx, idx + 1))
  const showPageLoader = needShowing(0)
  const showForm = needShowing(1)
  const showStripeModal = needShowing(2) && paymentData
  const showStripeCardField = needShowing(3)

  function onSuccessPay() {
    const time = 1000 * AppConfig.testEnvOrOther(3.8, 2.8)
    const push = time - 800
    setTimeout(() => {
      pushSuccessToast('Your order is confirmed!')
    }, push)
    setElements('1000')
    setTimeout(() => {
      refetchUser({
        extraOnSuccess: () => {
          AppLink.navigateToHref(Screens.plans())
        },
      })
    }, time)
  }

  return (
    <SafeFullScreenLayout contentTw="flex-1" headerIsShown>
      <AppText ctw={cn('')} testID="payment_screen">
        Payment
      </AppText>
      <AppText ctw={cn('')}>xx {JSON.stringify(local, null, 2)} </AppText>

      {showPageLoader && <Loader size={40} />}

      {showForm && (
        <Form
          {...{
            getPropsForField,
            formButtonLoading,
            setFormButtonLoading,
            getValueForField,
            setPaymentData,
            planId,
            setElements,
            validateFormAndFetch,
          }}
        />
      )}

      {showStripeModal && (
        <StripePaymentUiModal
          {...{
            setFormButtonLoading,
            onSuccessPay,
            hidePaymentModal: () => setElements('0100'),
            paymentData,
          }}
        />
      )}

      {showStripeCardField && (
        <StripeCardField
          extraOnSuccess={() => {
            refetchUser({
              extraOnSuccess: () => {
                setTimeout(() => {
                  AppLink.navigateToHref(Screens.plans())
                }, 1000 * 1)
              },
            })
          }}
        />
      )}
    </SafeFullScreenLayout>
  )
}

function Form({
  getPropsForField,
  formButtonLoading,
  getValueForField,
  setPaymentData,
  planId,
  setElements,
  validateFormAndFetch,
  setFormButtonLoading,
}) {
  return (
    <View>
      <AppTextInput {...getPropsForField('promocode')} autoCapitalize="none" />
      <Button
        label={'Update'}
        loading={formButtonLoading}
        testID={'purchase_plan'}
        onPress={() => {
          setFormButtonLoading(true)
          validateFormAndFetch({
            endpoint: endpoints.subscriptions,
            formatFieldsForFetching: () => ({
              planId,
              promocode: getValueForField('promocode'),
            }),
            onSuccess: ({ data }) => {
              setPaymentData(data)
              if (data.canPay) setElements('0110')
              else setElements('0001')
            },
          })
        }}
      />
    </View>
  )
}
function StripePaymentUiModal({
  setFormButtonLoading,
  onSuccessPay,
  hidePaymentModal,
  paymentData,
}) {
  const { post } = useApiProvider()

  const showStripeModal = async ({ clientSecret }) => {
    await loadPaymentModal()
    await openPaymentModal()

    async function loadPaymentModal() {
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Required for android',
      })
      if (error) {
        pushErrorToast('Stripe: ' + error.message)
        hidePaymentModal()
      }
      setFormButtonLoading(false)
    }
    async function openPaymentModal() {
      const { error } = await presentPaymentSheet()
      if (error) {
        if (error.code.toLowerCase() !== 'canceled') pushErrorToast('Stripe: ' + error.message)
        Consoler.error({ message: `stripe: code ${error.code} message: ${error.message}` })
        hidePaymentModal()
      } else {
        onSuccessPay()
      }
    }
  }

  const useApiInsteadOfModal = async ({ paymentIntentId }) => {
    post({
      endpoint: endpoints.confirmPaymentWithMethod,
      body: {
        paymentIntentId: paymentIntentId,
        method: 'pm_card_visa',
      },
      onSuccess: () => {
        setFormButtonLoading(false)
        onSuccessPay()
      },
      onError: () => {
        hidePaymentModal()
        setFormButtonLoading(false)
      },
    })
  }

  useEffect(() => {
    const modal = AppConfig.testEnvOrOther(useApiInsteadOfModal, showStripeModal)
    modal({ clientSecret: paymentData.clientSecret, paymentIntentId: paymentData.paymentIntentId })
  }, [])

  return null
}
