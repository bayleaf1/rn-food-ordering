import Button from '@components/Button'
import Card from '@components/Card'
import FadingOverlay from '@components/FadingOverlay'
import Radio from '@components/FormRelated/Radio'
import AppIcon from '@components/Pictures/AppIcon'
import LocalPicture from '@components/Pictures/LocalPicture'
import AppText from '@components/AppText/AppText'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import {
  initPaymentSheet,
  presentPaymentSheet,
  confirmPaymentSheetPayment,
} from '@stripe/stripe-react-native'
import { useApiProvider } from '@providers/ApiProvider'
import endpoints from '@constants/endpoints'
import { pushErrorToast, pushSuccessToast } from '@libs/Toaster'
import AppLink from '@libs/Navigation/AppLink'
import { Screens } from '@libs/Navigation/ScreenList'
import Loader from '@components/Loader'
import { useUserProvider } from '@providers/UserProvider'
import Consoler from '@libs/Consoler'
import AppConfig from '@constants/AppConfig'

export default function Payment({}) {
  const local = useLocalSearchParams()
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [loadingStripeUi, setLoadingStripeUi] = useState(false)
  const [postPaymentLoading, setPostPaymentLoading] = useState(false)
  const { refetchUser } = useUserProvider()

  const planId = Number(local.id)

  function onSuccessPay() {
    const time = 1000 * AppConfig.testEnvOrOther(3.8, 2.8)
    const push = time - 800
    setTimeout(() => {
      pushSuccessToast('Your order is confirmed!')
    }, push)
    setPostPaymentLoading(true)
    setTimeout(() => {
      refetchUser({
        extraOnSuccess: () => {
          setPostPaymentLoading(false)
          AppLink.navigateToHref(Screens.plans())
        },
      })
    }, time)
  }

  const Modal = AppConfig.testEnvOrOther(StripePaymentApiModal, StripePaymentUiModal)
  return (
    <SafeFullScreenLayout contentTw="flex-1" headerIsShown>
      <AppText ctw={cn('')} testID="payment_screen">
        Payment
      </AppText>
      <AppText ctw={cn('')}>xx {JSON.stringify(local, null, 2)} </AppText>
      <Button
        label={'Update'}
        loading={loadingStripeUi}
        testID={'purchase_plan'}
        onPress={() => setShowPaymentModal(true)}
      />
      {showPaymentModal && (
        <Modal
          setLoadingStripeUi={setLoadingStripeUi}
          planId={planId}
          promocode={''}
          onSuccessPay={onSuccessPay}
          hidePaymentModal={() => setShowPaymentModal(false)}
        />
      )}
      {postPaymentLoading && <Loader size={40} />}
      
    </SafeFullScreenLayout>
  )
}

function StripePaymentUiModal({
  planId,
  promocode,
  setLoadingStripeUi,
  onSuccessPay,
  hidePaymentModal,
}) {
  const { post } = useApiProvider()

  useEffect(() => {
    setLoadingStripeUi(true)
    post({
      endpoint: endpoints.subscriptions,
      body: { planId, promocode },
      onSuccess: ({ data }) => {
        const clientSecret = data.clientSecret

        load().then(async () => {
          const openPaymentSheet = async () => {
            const { error } = await presentPaymentSheet()
            if (error) {
              if (error.code.toLowerCase() !== 'canceled')
                pushErrorToast('Stripe: ' + error.message)
              Consoler.error({ message: `stripe: code ${error.code} message: ${error.message}` })
              hidePaymentModal()
            } else {
              onSuccessPay()
            }
          }
          await openPaymentSheet()
        })

        async function load() {
          const { error } = await initPaymentSheet({
            paymentIntentClientSecret: clientSecret,
            merchantDisplayName: 'Required for android',
          })
          if (error) {
            pushErrorToast('Stripe: ' + error.message)
            hidePaymentModal()
          }
          setLoadingStripeUi(false)
        }
      },
    })
  }, [])
  return <AppText ctw={cn('')}> Stripe ui modal </AppText>
}

function StripePaymentApiModal({ planId, promocode, onSuccessPay, setLoadingStripeUi }) {
  const { post } = useApiProvider()

  useEffect(() => {
    setLoadingStripeUi(true)
    post({
      endpoint: endpoints.subscriptions,
      body: { planId, promocode },
      onSuccess: ({ data }) => {
        post({
          endpoint: endpoints.confirmPaymentWithMethod,
          body: {
            paymentIntentId: data.paymentIntentId,
            method: 'pm_card_visa',
          },
          onSuccess: () => {
            setLoadingStripeUi(false)
            onSuccessPay()
          },
          onError: () => {
            hidePaymentModal()
          },
        })
      },
      onError: () => {
        hidePaymentModal()
      },
    })
  }, [])
  return <AppText ctw={cn('')}> Stripe api modal </AppText>
}
